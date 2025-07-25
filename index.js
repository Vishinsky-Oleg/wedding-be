const express = require('express');
const mongoose = require('mongoose');
const {connectDB} = require("./mongo/db");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/api/guest/:id', async (req, res) => {
    try {
        const guest = await mongoose.model('Guest').findById(req.params.id);

        if (!guest) return res.status(401).json({error: 'Гость не найден'});
        res.status(200).json({guest});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

app.post('/api/poll', async (req, res) => {
    try {
        const {guestId, isComing, name, withChildren, hasAllergies, additionalInfo, respondedAt} = req.body;

        if (!guestId || typeof isComing !== 'boolean') {
            return res.status(400).json({error: 'Invalid data'});
        }

        const guest = await mongoose.model('Guest').findById(guestId);
        if (!guest) return res.status(404).json({error: 'Guest not found'});

        await mongoose.model('Poll').create({
            guestId,
            isComing,
            name,
            withChildren,
            hasAllergies,
            additionalInfo,
            respondedAt
        });

        // Обновляем гостя TODO: TRUE
        guest.isPolled = false;
        await guest.save();

        res.json({success: true});
    } catch (err) {
        console.error('POST error:', err);
        res.status(500).json({error: 'Internal server error'});
    }
});

connectDB().then(() => {
    app.listen(3000, () => {
        console.log('Server started on port 3000');
    });
});

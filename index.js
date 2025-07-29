const express = require('express');
const mongoose = require('mongoose');
const {connectDB} = require("./mongo/db");
const app = express();
const cors = require("cors");
require('dotenv').config();

const adminID = process.env.ADMIN_ID;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const allowedOrigins = [
    'http://localhost:5173',
    'http://oleg-and-victoria-wedding.ru',
    'http://127.0.0.1:5173'
];

const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
};

app.use(cors(corsOptions));


app.get('/api/guest/:id', async (req, res) => {
    try {
        const guest = await mongoose.model('Guest').findById(req.params.id);

        if (!guest) return res.status(401).json({error: 'Гость не найден'});
        res.status(200).json({guest});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

app.get('/api/health', (req, res) => {
    res.json({
        dbStatus: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
    });
});


app.get('/api/polls/:id', async (req, res) => {
    try {
        if (adminID !== req.params.id) return res.status(401).json({error: 'Доступ запрещён'});
        const polls = await mongoose.model('Poll').find();
        res.json({polls});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

app.delete('/api/polls/:userId', async (req, res) => {
    const {userId} = req.params;
    const {pollId} = req.query;

    if (!userId || !pollId) {
        return res.status(400).json({error: 'userId и pollId обязательны'});
    }

    try {
        const poll = await mongoose.model('Poll').findById(pollId);

        if (!poll) {
            return res.status(404).json({error: 'Опрос не найден'});
        }

        if (adminID !== userId) {
            return res.status(403).json({error: 'Доступ запрещён'});
        }

        await mongoose.model('Poll').findByIdAndDelete(pollId);
        res.json({success: true});

    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

app.get('/api/guests/:id', async (req, res) => {
    if (adminID !== req.params.id) return res.status(401).json({error: 'Доступ запрещён'});
    try {
        const guests = await mongoose.model('Guest').find();
        res.json({guests});
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
        guest.isPolled = true;
        await guest.save();

        res.json({success: true});
    } catch (err) {
        console.error('POST error:', err);
        res.status(500).json({error: 'Internal server error'});
    }
});

app.post('/api/guests/:id', async (req, res) => {
    try {
        if (adminID !== req.params.id) return res.status(401).json({error: 'Доступ запрещён'});
        const guests = req.body;
        if (!Array.isArray(guests)) return res.status(400).json({error: 'Expected array'});
        await mongoose.model('Guest').insertMany(guests);
        res.json({success: true});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

app.patch('/api/guest/polled/:id', async (req, res) => {


    try {
        const {id} = req.params;
        const {userIDToChange} = req.query;

        if (adminID !== id) return res.status(401).json({error: 'Доступ запрещён'});
        const Guest = mongoose.model('Guest');

        const guest = await Guest.findById(userIDToChange);
        if (!guest) {
            return res.status(404).json({error: 'Гость не найден'});
        }

        guest.isPolled = false;
        await guest.save();

        res.json({success: true});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

connectDB().then(() => {
    app.listen(3000, () => {
        console.log('Server started on port 3000');
    });
});

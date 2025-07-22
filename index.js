const express = require('express');
const cors = require('cors');

const {connect, getDB} = require('./mongo/db');


const app = express();

const allowedOrigins = [
    'http://localhost:5173',          // Local development
    'http://oleg-and-victoria-wedding.ru',  // Your production domain
    'http://127.0.0.1:5173'          // Alternative localhost IP
];

const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);  // Allow the request
        } else {
            callback(new Error('Not allowed by CORS'));  // Block the request
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allowed HTTP methods
    credentials: true  // Enable cookies/auth headers if needed
};

app.use(cors(corsOptions));
app.use(express.json());

connect();

app.get('/api/guest/:id', async (req, res) => {
    try {
        const db = getDB();
        const guest = await db.collection('guests').findOne({_id: req.params.id});

        if (!guest) return res.status(401).json({error: 'Гость не найден'});
        res.status(200).json({guest, hasResponded: guest.hasResponded});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));


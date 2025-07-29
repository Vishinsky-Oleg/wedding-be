const mongoose = require("mongoose");
require('dotenv').config();

const mongoUsername = process.env.MONGODB_USERNAME;
const mongoPassword = process.env.MONGODB_PASSWORD;
const dbName = process.env.DB_NAME;


const DB_URI = 'mongodb://127.0.0.1:27017/weddingDB';
const DB_OPTIONS = {
    serverSelectionTimeoutMS: 30000,
    socketTimeoutMS: 45000,
    maxPoolSize: 10, // Лимит подключений
    family: 4 // IPv4
};


async function connectDB() {
    try {
        await mongoose.connect(DB_URI, DB_OPTIONS);
        console.log('MongoDB connected');
        await initModels();
        await seedInitialData();
    } catch (err) {
        console.error('DB connection error:', err.message);
        setTimeout(connectDB, 5000);
    }
}

function initModels() {
    const guestSchema = new mongoose.Schema({
        _id: {type: String, required: true},
        name: {type: String, required: true},
        isPolled: {type: Boolean, default: false},
        withC: {type: Boolean, default: false},
        gen: {type: String, required: true},
        res: {type: Boolean, default: false},
        createdAt: {type: Date, default: Date.now}
    }, {collection: 'guests'});

    const pollSchema = new mongoose.Schema({
        guestId: {type: String, required: true},
        name: {type: String, required: true},
        isComing: {type: Boolean, required: true},
        withChildren: {type: Boolean},
        hasAllergies: {type: String},
        additionalInfo: {type: String},
        respondedAt: {type: Date, default: Date.now}
    }, {collection: 'polls'});

    mongoose.model('Guest', guestSchema);
    mongoose.model('Poll', pollSchema);
}

async function seedInitialData() {
    const Guest = mongoose.model('Guest');
    const count = await Guest.countDocuments().then(n => Number(n));
    if (count === 0) {
        await Guest.insertMany([
            {_id: '001', name: 'Гость 1', gen: 'м'},
            {_id: '002', name: 'Гость 2', gen: 'ж'}
        ]);
        console.log('Guests seeded');
    }
}

module.exports = {connectDB};

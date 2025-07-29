const mongoose = require("mongoose");
require('dotenv').config();

const mongoUsername = process.env.MONGODB_USERNAME;
const mongoPassword = process.env.MONGODB_PASSWORD;
const dbName = process.env.DB_NAME;


const DB_URI = `mongodb://${mongoUsername}:${mongoPassword}@mongo:27017/${dbName}?authSource=admin`;
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
            {
                _id: "f015bfec-4072-49d6-82a4-238a61096ce4",
                name: "Светлана и Алим",
                isPolled: false,
                withC: false,
                gen: "t",
                res: true,
                createdAt: "2025-07-29T12:17:39.139Z",
                __v: 0
            },
            {
                _id: "455ff69f-1ba5-4208-811c-0c98422a5055",
                name: "Александра",
                isPolled: false,
                withC: false,
                gen: "s",
                res: false,
                createdAt: "2025-07-29T12:17:39.139Z",
                __v: 0
            },
            {
                _id: "6f8ff612-d169-40ba-96ee-9c84f9fbf76e",
                name: "Елена и Арсений",
                isPolled: false,
                withC: false,
                gen: "t",
                res: true,
                createdAt: "2025-07-29T12:17:39.140Z",
                __v: 0
            },
            {
                _id: "64c9d075-c837-491e-b0de-c8195a485bf2",
                name: "Людмила Семеновна",
                isPolled: false,
                withC: false,
                gen: "s",
                res: true,
                createdAt: "2025-07-29T12:17:39.140Z",
                __v: 0
            },
            {
                _id: "65dd958f-c4c6-4b34-9ecd-81aef8e5b786",
                name: "Александр и Анастасия",
                isPolled: false,
                withC: false,
                gen: "t",
                res: true,
                createdAt: "2025-07-29T12:17:39.140Z",
                __v: 0
            },
            {
                _id: "fd0d9e63-507a-4f6f-8bd8-e682b638b9e4",
                name: "Ольга и Антон",
                isPolled: false,
                withC: false,
                gen: "t",
                res: true,
                createdAt: "2025-07-29T12:17:39.140Z",
                __v: 0
            },
            {
                _id: "208c9af9-6150-4fb8-bd45-518316dc483c",
                name: "Виктория",
                isPolled: false,
                withC: false,
                gen: "s",
                res: false,
                createdAt: "2025-07-29T12:17:39.140Z",
                __v: 0
            },
            {
                _id: "8731094d-4e77-48bb-a482-3a248842424c",
                name: "Дмитрий",
                isPolled: false,
                withC: false,
                gen: "h",
                res: false,
                createdAt: "2025-07-29T12:17:39.140Z",
                __v: 0
            },
            {
                _id: "884ea0da-1a42-41c0-a937-782bcc988f83",
                name: "Мама и Папа",
                isPolled: false,
                withC: false,
                gen: "t",
                res: true,
                createdAt: "2025-07-29T12:17:39.140Z",
                __v: 0
            },
            {
                _id: "23318be2-d4a0-446d-92b9-7d9c36eef06a",
                name: "Елена",
                isPolled: false,
                withC: false,
                gen: "s",
                res: false,
                createdAt: "2025-07-29T12:17:39.140Z",
                __v: 0
            },
            {
                _id: "dd0197fb-1601-4fad-9176-d9c9c1be2716",
                name: "Ольга и Николай",
                isPolled: false,
                withC: false,
                gen: "t",
                res: true,
                createdAt: "2025-07-29T12:17:39.140Z",
                __v: 0
            },
            {
                _id: "ad00bac1-eee6-457b-bb45-63418de2b14c",
                name: "Елена Михайловна",
                isPolled: false,
                withC: false,
                gen: "s",
                res: true,
                createdAt: "2025-07-29T12:17:39.140Z",
                __v: 0
            },
            {
                _id: "008fd995-305e-403d-ad29-2865e4ede01a",
                name: "Денис, Светлана и Дарья",
                isPolled: false,
                withC: false,
                gen: "t",
                res: true,
                createdAt: "2025-07-29T12:17:39.140Z",
                __v: 0
            },
            {
                _id: "2e86b285-ea05-4cb1-80ac-11adbadf2492",
                name: "Анатолий и Любовь",
                isPolled: false,
                withC: false,
                gen: "t",
                res: true,
                createdAt: "2025-07-29T12:17:39.140Z",
                __v: 0
            },
            {
                _id: "fb3bfc6e-a06c-4442-8e84-a5b7da121e64",
                name: "Ольга и Виктор",
                isPolled: false,
                withC: false,
                gen: "t",
                res: true,
                createdAt: "2025-07-29T12:17:39.140Z",
                __v: 0
            },
            {
                _id: "b457e3f0-a122-4e2b-a034-bb60412d81ab",
                name: "Дарья и Павел",
                isPolled: false,
                withC: true,
                gen: "t",
                res: true,
                createdAt: "2025-07-29T12:17:39.140Z",
                __v: 0
            },
            {
                _id: "1f56d201-9ac0-4212-b96c-17e349682a9d",
                name: "Вячеслав и Евгения",
                isPolled: false,
                withC: false,
                gen: "t",
                res: true,
                createdAt: "2025-07-29T12:17:39.140Z",
                __v: 0
            },
            {
                _id: "6996e948-ab1a-467e-b7e5-7b4cd23cbde1",
                name: "Максим",
                isPolled: false,
                withC: false,
                gen: "h",
                res: false,
                createdAt: "2025-07-29T12:17:39.140Z",
                __v: 0
            },
            {
                _id: "2bf6a55a-17cb-434a-8cc0-197ff8fca96a",
                name: "Татьяна",
                isPolled: false,
                withC: false,
                gen: "s",
                res: true,
                createdAt: "2025-07-29T12:17:39.140Z",
                __v: 0
            },
            {
                _id: "2f3115f0-493f-4cfe-bbf5-893845d1394b",
                name: "Александр и Ирина",
                isPolled: false,
                withC: false,
                gen: "t",
                res: true,
                createdAt: "2025-07-29T12:17:39.140Z",
                __v: 0
            },
            {
                _id: "5987d9fc-b326-4775-97fa-ccfd580929bc",
                name: "Екатерина",
                isPolled: false,
                withC: false,
                gen: "s",
                res: false,
                createdAt: "2025-07-29T12:17:39.140Z",
                __v: 0
            },
            {
                _id: "f3d64f0b-9e74-4f7d-86e2-d9a4ccf4de77",
                name: "Марина",
                isPolled: false,
                withC: false,
                gen: "s",
                res: false,
                createdAt: "2025-07-29T12:17:39.140Z",
                __v: 0
            },
            {
                _id: "f3993410-a7d8-4d16-be91-2a462a1ce9d9",
                name: "Максим и Анна",
                isPolled: false,
                withC: true,
                gen: "t",
                res: true,
                createdAt: "2025-07-29T12:17:39.140Z",
                __v: 0
            },
            {
                _id: "926aafc3-7545-45e6-afda-41c52d0357da",
                name: "Борис и Ирина",
                isPolled: false,
                withC: true,
                gen: "t",
                res: true,
                createdAt: "2025-07-29T12:17:39.140Z",
                __v: 0
            },
            {
                _id: "65c0a720-7aba-4d1e-8d65-db05c2c760c6",
                name: "Максим и Ольга",
                isPolled: false,
                withC: true,
                gen: "t",
                res: true,
                createdAt: "2025-07-29T12:17:39.140Z",
                __v: 0
            },
            {
                _id: "f75d3d41-3b72-4934-958d-846d9c44385e",
                name: "Ольга",
                isPolled: false,
                withC: false,
                gen: "s",
                res: false,
                createdAt: "2025-07-29T12:17:39.140Z",
                __v: 0
            },
            {
                _id: "85ac4b18-27e1-4d86-983b-56e8cd9aaf7f",
                name: "Лев",
                isPolled: false,
                withC: false,
                gen: "he",
                res: false,
                createdAt: "2025-07-29T12:17:39.140Z",
                __v: 0
            },
            {
                _id: "b0754d3b-ddc5-4e2b-a079-69566ef073df",
                name: "Ксения",
                isPolled: false,
                withC: false,
                gen: "s",
                res: false,
                createdAt: "2025-07-29T12:17:39.140Z",
                __v: 0
            },
            {
                _id: "36b66606-9876-421d-97a3-c0c9d5c4744c",
                name: "Алена",
                isPolled: false,
                withC: false,
                gen: "s",
                res: false,
                createdAt: "2025-07-29T12:17:39.140Z",
                __v: 0
            },
            {
                _id: "01f3ee8b-e2a8-40fe-b36d-c3421b811af6",
                name: "Антон и Диана",
                isPolled: false,
                withC: true,
                gen: "t",
                res: true,
                createdAt: "2025-07-29T12:17:39.140Z",
                __v: 0
            },
            {
                _id: "3938dde8-ffd3-4bc7-b13f-a31149d57884",
                name: "Влад и Екатерина",
                isPolled: false,
                withC: false,
                gen: "t",
                res: true,
                createdAt: "2025-07-29T12:17:39.140Z",
                __v: 0
            },
            {
                _id: "91d6fba0-8fcb-462f-8d63-4befed282fb0",
                name: "Маджид и Виктория",
                isPolled: false,
                withC: false,
                gen: "t",
                res: true,
                createdAt: "2025-07-29T12:17:39.140Z",
                __v: 0
            },
            {
                _id: "4e8e23fe-60b7-46a6-82a8-61ceb2164b7a",
                name: "Виолетта",
                isPolled: false,
                withC: false,
                gen: "s",
                res: false,
                createdAt: "2025-07-29T12:17:39.140Z",
                __v: 0
            },
            {
                _id: "72099784-93c0-46c3-a3db-8e67ce3e92e7",
                name: "Ирина и Андрей",
                isPolled: false,
                withC: true,
                gen: "t",
                res: true,
                createdAt: "2025-07-29T12:17:39.140Z",
                __v: 0
            },
            {
                _id: "f5652ffb-2bd7-4efc-ae96-7a2e8cc161db",
                name: "Алексей и Диана",
                isPolled: false,
                withC: false,
                gen: "t",
                res: true,
                createdAt: "2025-07-29T12:17:39.140Z",
                __v: 0
            }
        ]);
        console.log('Guests seeded');
    }
}

module.exports = {connectDB};

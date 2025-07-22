const {MongoClient} = require('mongodb');
require('dotenv').config();

const mongoUsername = process.env.MONGODB_USERNAME;
const mongoPassword = process.env.MONGODB_PASSWORD;
const dbName = process.env.DB_NAME;


const uri = `mongodb://${mongoUsername}:${mongoPassword}@localhost:27017/${dbName}?authSource=${dbName}`;
const client = new MongoClient(uri);

let db;

async function connect() {
    try {
        await client.connect();
        db = client.db();
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    }
}

function getDB() {
    if (!db) throw new Error("MongoDB not connected");
    return db;
}

module.exports = {connect, getDB};

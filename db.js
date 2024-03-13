const mongoose = require('mongoose');
require('dotenv').config()

// define the mongoDB connection URL
// const mongoURL = process.env.MONGO_DB_URL_LOCAL;
const mongoURL = process.env.MONGO_DB_URL

//set up mongoDB connection
mongoose.connect(mongoURL)

// get the default connection
const db = mongoose.connection;  

db.on('connected', () => {
    console.log('Connected to MongoDB server...');
});

db.on('error', () => {
    console.log('Error connecting to MongoDB server...');
});

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB server...');
});

// export the database connection
module.exports = db;
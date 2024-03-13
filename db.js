const mongoose = require('mongoose');

// define the mongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels';

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
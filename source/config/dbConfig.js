const mongoose = require('mongoose');
const serverConfig = require('./serverConfig');

async function connectDB() {
    try {
        await mongoose.connect(serverConfig.DB_URL);
        console.log('Connected to Database Successfully');
    } catch (error) {
        console.log('Unable to connect to Database');
        console.log(error.message);
    }
}

module.exports = connectDB;
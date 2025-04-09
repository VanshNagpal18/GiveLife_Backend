const express = require('express');
const { createDonor } = require('../Controller/donorController');
const multer = require('multer');
const upload = multer(); // memory storage by default


const donorRouter = express.Router();

donorRouter.post('/register', upload.none(), createDonor);

module.exports = {
    donorRouter
}
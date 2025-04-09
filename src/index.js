const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
const serverConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');
const { donorRouter } = require('./Routes/Router');

const app = express();

console.log(serverConfig.FRONTEND_URL)

app.use(cors({
    origin: serverConfig.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))


app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/donor', donorRouter);


app.listen(serverConfig.PORT, async () => {
    await connectDB();
    console.log("Server is running on port " + serverConfig.PORT);
})
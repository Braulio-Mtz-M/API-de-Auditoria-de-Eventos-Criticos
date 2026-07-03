require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/database');

const app = express();
const PORT = 5100;

app.use(express.json());

// DB connection
connectDB();

app.listen(PORT, () => {
    console.log(`Hello World http://localhost:${PORT}`);
});
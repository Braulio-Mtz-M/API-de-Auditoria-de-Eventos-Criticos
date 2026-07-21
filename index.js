require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/database');
const helmet = require('helmet');
const auditoriaRoutes = require('./src/routes/auditoria');

const app = express();
const PORT = 5100;

app.use(helmet());
app.use(express.json());
app.use('/api/auditorias', auditoriaRoutes);

// DB connection
connectDB();

app.listen(PORT, () => {
    console.log(`Hello World http://localhost:${PORT}`);
});
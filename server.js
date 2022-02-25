const express = require('express');
const app = express();
require('dotenv').config({ path: './config/.env' });
require('./config/db.js');
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server lancé sur le port: ${PORT}`);
});
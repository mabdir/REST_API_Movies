const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./server/config/db');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

connectDB();

app.use('/', require('./server/routes/movie'));

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`)
});
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


// connect to mongo db
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true, useCreateIndex: true }
    );
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection established successfully");
})


const exerciseRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exerciseRouter);
app.use('/users', usersRouter);


// start server
app.listen(port , () => {
    console.log(`Server running on port: ${port}`);
})
/**
 * @author Nicolás Tutor
 * Se creó una API RESTful usando Node, Express y MongoDB donde tenemos un conjunto de 
 * compañías a las que pueden pertenecer cero o más usuarios.
 */

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

// DB
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
});

database.once('connected', () => {
    console.log('DB conectada');
});

// APP
const app = express();

app.use(express.json());

const routes = require('./routes/routes');
app.use(routes);

app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Servidor Express.js ejecutandose en http:/${process.env.HOST}:${process.env.PORT}/`);
});
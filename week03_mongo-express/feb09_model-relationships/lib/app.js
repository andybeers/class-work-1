const express = require('express');
const app = express();
const pets = require('./routes/pets');
const petTypes = require('./routes/pet-types');

const logger = require('logger')();
app.use(logger);

// // logging:
// const morgan = require('morgan');
// app.use(morgan('dev'));

const path = require('path');
const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

app.use('/pets', pets);
app.use('/pet-types', petTypes);

module.exports = app;
const express = require('express');
const app = express();
const pets = require('./routes/pets');
const morgan = require('morgan');
app.use(morgan('dev'));

const path = require('path');
const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

app.use('/pets', pets);

module.exports = app;

/* middleware flow examples */
app.use('/foo', (req, res, next) => {
    if(req.query.foo === 'foo') {
        req.foo = 'sekrit foo';
        next();
    }
    else {
        res.send('you called fake pets!');
    }
});

app.use('/foo', (req, res) => {
    res.send('the foo is ' + req.foo);
});

app.use('/bar', (req, res, next) => {
    next('no /bar allowed!');
});

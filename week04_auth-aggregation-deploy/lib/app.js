const app = require('express')();
const morgan = require('morgan')('dev');
const actors = require('./routes/actors');

app.use(morgan);

app.use('/actors', actors);

app.get('/status', (req, res) => {
    res.send('OK');
});

module.exports = app;
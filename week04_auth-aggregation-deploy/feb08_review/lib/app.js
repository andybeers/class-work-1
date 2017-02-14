const app = require('express')();
const morgan = require('morgan')('dev');
const actors = require('./routes/actors');
const awards = require('./routes/awards');

app.use(morgan);

app.use('/actors', actors);
app.use('/awards', awards);

app.get('/status', (req, res) => {
    res.send('OK');
});

app.get('/awards', (req, res) => {

});

module.exports = app;
const app = require('express')();
const morgan = require('morgan')('dev');

app.use(morgan);

app.get('/status', (req, res) => {
    res.send('OK');
});

module.exports = app;
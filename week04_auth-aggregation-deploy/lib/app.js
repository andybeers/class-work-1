const app = require('express')();

app.get('/status', (req, res) => {
    res.send('OK');
});

module.exports = app;
const router = require('express').Router();

module.exports = router
    .get('/', (req, res) => {
        res.send([{ name: 'james dean', dob: '1/1/1935' }]);
    });
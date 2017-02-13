const router = require('express').Router();
const Actor = require('../models/actor');

module.exports = router
    .get('/', (req, res, next) => {
        Actor.find()
            .lean()
            .then(actors => res.send(actors))
            .catch(next);
    });
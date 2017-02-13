const router = require('express').Router();
const Actor = require('../models/actor');

module.exports = router
    .get('/', (req, res, next) => {
        Actor.find()
            .lean()
            .then(actors => res.send(actors))
            .catch(next);
    })
    .get('/:id', (req, res, next) => {
        Actor.findById(req.params.id)
            // TODO: check !actor and send 404
            .then(actor => res.send(actor))
            .catch(next);

    });
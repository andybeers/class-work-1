const router = require('express').Router();
const Award = require('../models/award');
const Actor = require('../models/actor');

module.exports = router
    .get('/', (req, res, next) => {
        Award.find()
            .then(awards => res.send(awards))
            .catch(next);
    })
    .get('/:id', (req, res, next) => {
        const id = req.params.id;
        Promise.all([
            Award.findById(id).lean(),
            Actor.find({ awards: id }).lean()
        ])
        .then(results => {
            const award = results[0];
            const actors = results[1];
            award.actors = actors;
            res.send(award);
        })
        .catch(next);
    });
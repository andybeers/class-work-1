const router = require('express').Router();
const Restaurant = require('../models/restaurant');

router
    .get('/', (req, res, next) => {
        const query = {};
        const borough = req.query.borough;
        if(borough) {
            query.borough = borough;
        }

        Restaurant.find(req.query)
            .lean()
            .limit(1000)
            .sort('borough')
            .then(restaurants => res.send(restaurants))
            .catch(next);
    })
    .get('/best', (req, res, next) => {
        Restaurant.getBest(req.query.top, req.query.borough)
            .then(restaurants => res.send(restaurants))
            .catch(next);

    })
    .get('/:id', (req, res, next) => {
        Restaurant.findById(req.params.id)
            .then(restaurant => res.send(restaurant))
            .catch(next);
    });

module.exports = router;
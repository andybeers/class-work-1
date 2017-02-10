const router = require('express').Router();
const Store = require('../models/store');
const Pet = require('../models/pet');

router
    .get('/', (req, res, next) => {
        Store.find()
            .then(pets => res.send(pets))
            .catch(next);
    })
    .get('/:id', (req, res, next) => {
        const storeId = req.params.id;

        Promise.all([
            Store.findById(storeId).lean(),
            Pet.find({ store: storeId }).lean()
        ])
        .then(results => {
            const store = results[0];
            const pets = results[1];

            store.pets = pets;

            console.log(store);

            res.send(store);
        })
        .catch(next);
    });

module.exports = router;

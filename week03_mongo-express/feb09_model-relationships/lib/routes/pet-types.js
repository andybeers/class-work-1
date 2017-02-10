const router = require('express').Router();
const PetType = require('../models/pet-type');

router
    .get('/', (req, res, next) => {
        PetType.find()
            .then(pets => res.send(pets))
            .catch(next);
    });

module.exports = router;

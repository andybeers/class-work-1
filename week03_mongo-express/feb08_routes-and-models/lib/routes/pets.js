const express = require('express');
const Router = express.Router;
const router = Router();

// above same as:
//const router = require('express').Router();

const Pet = require('../models/pet');

function parseBody(req) {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', data => body += data);
        req.on('error', err => reject(err));
        req.on('end', () => {
            const pet = JSON.parse(body);
            resolve(pet);
        });
    });
}

router
    .get('/', (req, res, next) => {
        const query = {};
        if(req.query.type) query.type = req.query.type;

        Pet.find(query)
            .then(pets => res.send(pets))
            // .catch(err => next(err));
            // same functionality as above
            .catch(next);
    })

    .get('/:id', (req, res) => {
        Pet.findById(req.params.id)
            .then(pet => {
                if(!pet) {
                    res.status(404).send({ error: `Id ${req.params.id} Not Found`});
                }
                else {
                    res.send(pet);
                }
            });
    })


    .post('/', (req, res, next) => {
        req.favoriteToys = ['snuggy'];
        next();
    }, (req, res, next) => {
        parseBody(req)
            .then(body => {
                body.favoriteToys = req.favoriteToys;
                return new Pet(body).save();
            })
            .then(pet => res.send(pet))
            .catch(next);
    })

    .put('/:id', (req, res) => {
        parseBody(req)
            .then(pet => {
                return Pet.findByIdAndUpdate(
                    req.params.id,
                    pet, 
                    { new: true, runValidators: true }
                );
            })
            .then(pet => {
                res.send(pet);
            });
    })

    .delete('/:id', (req, res) => {
        Pet.findByIdAndRemove(req.params.id)
            .then(deleted => {
                res.send({ deleted: !!deleted });
            });
    });

module.exports = router;

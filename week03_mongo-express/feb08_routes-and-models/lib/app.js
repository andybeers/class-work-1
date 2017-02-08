const express = require('express');
const app = express();
const Pet = require('./models/pet');

// When methods are on the "class",
// we say it is a "static" method:
// Pet.find();

// When meethods are on the "instance",
// we say it is an "instance" method:
// var pet = new Pet() 
// pet.save();

const path = require('path');
const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

app.get('/pets', (req, res) => {
    const query = {};
    if(req.query.type) query.type = req.query.type;

    Pet.find(query)
        .then(pets => res.send(pets));
});

app.get('/pets/:id', (req, res) => {
    Pet.findById(req.params.id)
        .then(pet => {
            if(!pet) {
                res.status(404).send({ error: `Id ${req.params.id} Not Found`});
            }
            else {
                res.send(pet);
            }
        });
});

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

app.post('/pets', (req, res) => {
    parseBody(req)
        .then(body => new Pet(body).save())
        .then(pet => res.send(pet));
});

app.put('/pets/:id', (req, res) => {
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

    // full validation using retrieval and (re)save
    // Pet.findById(req.params.id)
    //     .then(pet => {
    //         pet.name = 'jr';
    //         return pet.save();
    //     })
    //     .then(pet => res.send(pet));
});

app.delete('/pets/:id', (req, res) => {
    Pet.findByIdAndRemove(req.params.id)
        .then(deleted => {
            res.send({ deleted: !!deleted });
        });
});

module.exports = app;
const express = require('express');
const app = express();
const ObjectId = require('mongodb').ObjectID;

const connection = require('./connection');

app.get('/pets', (req, res) => {
    connection.db.collection('pets')
        .find().toArray()
        .then(pets => res.send(pets));
});

app.get('/pets/:id', (req, res) => {
    connection.db.collection('pets')
        .findOne({ _id: new ObjectId(req.params.id) })
        .then(pet => res.send(pet));
});

app.post('/pets', (req, res) => {
    let body = '';
    req.on('data', data => body += data);
    req.on('end', () => {
        const pet = JSON.parse(body);
        connection.db.collection('pets')
            .insert(pet)
            .then(response => response.ops[0])
            .then(savedPet => res.send(savedPet));
    });
});

module.exports = app;
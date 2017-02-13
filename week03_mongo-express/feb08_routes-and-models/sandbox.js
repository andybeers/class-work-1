require('./lib/connection');
const Pet = require('./lib/models/pet');


Pet.find()
    .then(pets => console.log(pets));
require('./lib/connection');
const PetType = require('./lib/models/pet-type');

new PetType({ name: 'bird' }).save()
    .then(() => console.log('saved!'));

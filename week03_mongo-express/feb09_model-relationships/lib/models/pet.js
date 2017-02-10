const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// if model is not required anywhere else...
const Toy = require('./toy');

const schema = new Schema({
    store: {
        type: Schema.Types.ObjectId,
        ref: 'Store'
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: Schema.Types.ObjectId,
        ref: 'PetType'
    },
    favoriteToys: [Toy.schema]
});

module.exports = mongoose.model('Pet', schema);
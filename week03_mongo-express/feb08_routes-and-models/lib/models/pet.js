const mongoose = require('mongoose');
// Reference the Schema "class" (aka contructor function)
const Schema = mongoose.Schema;

// Create a new Schema that describes a pet
const schema = new Schema({
    // define fields (aka properties, aka columns)
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['dog', 'cat', 'bird', 'lizard']
    },
    favoriteToys: [String],
    legs: {
        type: Number,
        // ultimate custom validation, write your own function!
        validate: {
            validator(value) {
                return value > 0 && value < 7;
            },
            message: '{VALUE} is the ___wrong__ number of legs for a pet!'
        }
    }
});

// turn the schema into a model "Pet"
const Pet = mongoose.model('Pet', schema);
module.exports = Pet;
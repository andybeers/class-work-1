const mongoose = require('mongoose');
// Reference the Schema "class" (aka contructor function)
const Schema = mongoose.Schema;

// Create a new Schema that describes a pet
const schema = new Schema({
    // define fields (aka properties, aka columns)
    name: String,
    type: String
});

// turn the schema into a model "Pet"
const Pet = mongoose.model('Pet', schema);
module.exports = Pet;
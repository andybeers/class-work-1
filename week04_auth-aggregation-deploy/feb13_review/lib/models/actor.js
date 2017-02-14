const mongoose = require('mongoose');
const Award = require('./award');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    awards: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Award'
    }]
});

module.exports = mongoose.model('Actor', schema);
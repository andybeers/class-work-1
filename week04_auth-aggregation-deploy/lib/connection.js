const mongoose = require('mongoose');
mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost:27017/ripe-banana');

mongoose.connection.on('connected', () => {
    console.log('connected to mongo');
});
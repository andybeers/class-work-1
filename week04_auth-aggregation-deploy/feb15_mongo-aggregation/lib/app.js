const app = require('express')();
const morgan = require('morgan')('dev');
const errorHandler = require('./error-handler')();
const restaurants = require('./routes/restaurants');

app.use(morgan);

app.use('/restaurants', restaurants);

app.use(errorHandler);

module.exports = app;
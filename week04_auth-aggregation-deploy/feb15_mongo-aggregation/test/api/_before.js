// 1. make a connection to mongo
process.env.DB_URI = 'mongodb://localhost:27017/restaurants-test';
require('../../lib/connection');
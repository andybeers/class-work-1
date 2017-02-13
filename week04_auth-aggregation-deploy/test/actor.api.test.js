const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const childProcess = require('child_process');
const assert = chai.assert;

const app = require('../lib/app');

// 1. make a connection to mongo
process.env.DB_URI = 'mongodb://localhost:27017/ripe-banana-test';
require('../lib/connection');
const mongoose = require('mongoose');


// 2. make sure database is in known starting condition

describe('actor API', () => {

    before(() => mongoose.connection.dropDatabase());

    before(done => {
        childProcess.exec('mongoimport --file=./test/actors.json -d ripe-banana-test -c actors --jsonArray', done);
    });

    const request = chai.request(app);

    const clooneyId = '58a235979e6f58679df64897';

    it('gets george clooney by id', () => {
        return request.get(`/actors/${clooneyId}`)
            .then(res => {
                const clooney = res.body;
                assert.equal(clooney.name, 'george clooney');
            });
    });



});
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const childProcess = require('child_process');
const assert = chai.assert;

const app = require('../../lib/app');

// 1. make a connection to mongo
const mongoose = require('mongoose');


// 2. make sure database is in known starting condition

describe('actor API', () => {

    before(() => mongoose.connection.dropDatabase());

    // const getCmd = collection => {
    //     return `mongoimport --file=./test/api/${collection}.json -d ripe-banana-test -c ${collection} --jsonArray`;
    // };

    // before(done => {
    //     childProcess.exec(getCmd('awards'), err => {
    //         if(err) return done(err);
    //         childProcess.exec(getCmd('actors'), done);
    //     });
    // });

    const request = chai.request(app);

    it('', () => {
        return request.get('')
            .then(res => {
                
            });
    });



});
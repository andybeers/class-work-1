const connection = require('../lib/connection');
const assert = require('chai').assert;

describe.skip('connect to db', () => {

    const DB_URI = 'mongodb://localhost:27017/local';
    let db = null;

    // instead of "done", you can return a promise to mocha test method
    // before(done => {
    //     connection.connect(DB_URI, (err, db) => {
    //         if(err) done(err);
    //         else {
    //             assert.isOk(db);
    //             done();
    //         }
    //     });
    // });

    before(() => {
        return connection.connect(DB_URI)
            .then(_db => db = _db);
    });

    it('resolved db from .connect() same as connection.db', () => {
        assert.strictEqual(db, connection.db);
    });

    it('errors on second connect call', () => {
        return connection.connect('mongodb://localhost:27017/whatever')
            .then(
                () => { throw new Error('should not resolve'); },
                () => true
            );
    });

    it('clears connection.db on close', () => {
        return connection.close()
            .then(() => assert.isNull(connection.db));
    });
});
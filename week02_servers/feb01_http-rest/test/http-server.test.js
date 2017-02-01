const chai = require('chai');
const assert = chai.assert;
// plugin
const chaiHttp = require('chai-http');
// "register" the plugin with chai using .use
chai.use(chaiHttp);

// http server under test (SUT = system under test)
const server = require('../lib/http-server');

describe('testing http servers with chai-http', () => {

    const request = chai.request(server);

    it('GET / says "hello world"', done => {
        request
            .get('/')
            .end((err, res) => {
                assert.strictEqual(res.text, 'hello world!');
                done();
            });
    });

    it('POST / says not accepting', done => {
        request
            .post('/')
            .end((err, res) => {
                assert.strictEqual(res.text, 'not accepting posts at this time');
                done();
            });
    });

    it('PUT is 404 error', done => {
        request
            .put('/')
            .end((err, res) => {
                assert.equal(err.response.statusCode, 404);
                done();
            });
    });

    it('GET with format json returns content body', done => {
        request
            .get('/')
            .query({ format: 'json' })
            .end((err, res) => {
                assert.isOk(res.body);
                assert.deepEqual(res.body, { message: 'hello world' });
            });
    });
 
});
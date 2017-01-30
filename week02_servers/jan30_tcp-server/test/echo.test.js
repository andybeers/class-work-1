const assert = require('assert');
const net = require('net');
const server = require('../lib/echo');

const PORT = 65000;

describe('echo server', () => {

    before(done => {
        server.listen(PORT, () => {
            done();
        });
    });

    let client;
    before(done => {
        client = net.connect({ port: PORT }, () => {
            client.setEncoding('utf8');
            done();
        })
    });

    it('greets client with "hello"', done => {
        client.once('data', data => {
            assert.equal(data, 'hello');
            done();
        });
    });

    it('repeats what client says', done => {
        client.once('data', data => {
            assert.equal(data, 'echo this server!');
            done();
        });

        client.write('echo this server!');
    });
});
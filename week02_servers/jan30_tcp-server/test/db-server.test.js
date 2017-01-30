const assert = require('assert');
const net = require('net');
const server = require('../lib/db-server');

const PORT = 65000;

describe('db server', () => {

    before(done => {
        server.listen(PORT, () => {
            done();
        });
    });

    after(done => {
        client.end(done);
        server.close();
    });

    let client;
    before(done => {
        client = net.connect({ port: PORT }, () => {
            client.setEncoding('utf8');
            done();
        })
    });

    it('client getsAll "pets"', done => {
        const message = {
            method: 'getAll',
            table: 'pets'
        };

        client.once('data', data => {
            const response = JSON.parse(data);
            assert.deepEqual(response.data, []);
            done();
        });

        client.write(JSON.stringify(message));
    });

    let saved;

    it('client saves a "pet"', done => {
        const message = {
            method: 'save',
            table: 'pets',
            data: {
                name: 'tweety',
                type: 'bird'
            }
        };

        client.once('data', data => {
            const response = JSON.parse(data);
            saved = response.data;
            assert.ok(saved._id);
            done();
        });

        client.write(JSON.stringify(message));
    });

    it('client gets the saved "pet"', done => {
        const message = {
            method: 'get',
            table: 'pets',
            data: saved._id
        };

        client.once('data', data => {
            const response = JSON.parse(data);
            const got = response.data;
            assert.deepEqual(got, saved);
            done();
        });

        client.write(JSON.stringify(message));
    });

});
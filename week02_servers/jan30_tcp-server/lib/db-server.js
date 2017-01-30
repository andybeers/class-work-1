const net = require('net');
const server = net.createServer();

// require and create your db library
// const createDb = require('./db');
// const db = createDb('./test-dir');

function getAll(table, cb) {
    setTimeout(() => {
        // hard-coded empty array
        cb(null, []);
    });
}

let saved = null;

function save(table, data, cb) {
    saved = data;
    saved._id = 123;
    setTimeout(() => {
        // hard-coded empty array
        cb(null, saved);
    });
}

function get(table, id, cb) {
    if(id !== saved._id) return ('404 not found')
    setTimeout(() => {
        // hard-coded empty array
        cb(null, saved);
    });
}

server.on('connection', client => {
    client.setEncoding('utf8');

    client.on('data', data => {
        // interface between request from client
        const request = JSON.parse(data);
        // and actual call to make to db libary
        if(request.method === 'getAll') {
            getAll(request.table, (err, data) => {
                client.write(JSON.stringify({ data: data }));
            });
        }
        else if(request.method === 'save') {
            save(request.table, request.data, (err, data) => {
                client.write(JSON.stringify({ data: data }));
            })
        }
        else if(request.method === 'get') {
            get(request.table, request.data, (err, data) => {
                client.write(JSON.stringify({ data: data }));
            })
        }
        /* else if( ... ) */
    });
});

module.exports = server;
const net = require('net');

const server = net.createServer();

server.on('connection', client => {
    client.setEncoding('utf8');

    client.write('hello');

    client.on('data', data => {
        client.write(data);
    });
});

module.exports = server;
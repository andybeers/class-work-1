const http = require('http');
const url = require('url');
const qs = require('querystring');

// const server = new http.Server();
// server.on('request', (req, res) => {
// });

// this is short-hand method for above 3 lines
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const query = qs.parse(parsedUrl.query);
    console.log(query);

    if(req.method === 'POST') {
        res.end('not accepting posts at this time');
    }
    else if(req.method === 'GET') {
        if(query.format === 'json') {
            res.setHeader('Content-Type', 'application/json');
            // res.setHeader('Content-Type', 'text/html');
            res.end(JSON.stringify({ message: 'hello world' }));
        }
        else {
            res.end('hello world!');
        }
    }
    else {
        res.statusCode = 404;
        res.end(`http method ${req.method} is not supported`);
    }
});

module.exports = server;
const server = require('./lib/echo');

server.listen(65000, () => {
    console.log('server is listening');
});
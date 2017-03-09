const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router({
  rooms: [],
  messages: [],
});
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3001, function() {
  console.log('JSON Server is running: http://localhost:3001');
});

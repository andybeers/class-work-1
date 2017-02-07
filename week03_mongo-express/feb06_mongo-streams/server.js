const http = require('http');
const fs = require('fs');

// MongoClient is thing to connect to mongodb and be a "client"
const MongoClient = require('mongodb').MongoClient;

// uri for the databse
// protocol: monogodb
// server: localhost (for dev)
// port: 27107 (default)
// database name: mythical-animals
const DB_URI = 'mongodb://localhost:27017/mythical-animals';

let db = null;
// connect to mongo, get callback with error or db handle
MongoClient.connect(DB_URI, (err, _db) => {
  if(err) return console.log('FAIL!', err);
  console.log('connected to mongo db...');
  // store this so we can use it in the http handler
  db = _db;
});

http.createServer((req, res) => {
    
    if(req.url === '/unicorns') {
        res.setHeader('Content-Type', 'application/json');
        // this gets the result as an array, then sends
        db.collection('unicorns').find().toArray()
            .then(unicorns => res.end(JSON.stringify(unicorns)))
            .catch(err => console.log(err));

        // if we wanted to stream...
        // const stream = db.collection('unicorns').find().stream();
        // res.write('[')
        // stream.on('data', data => {
        //     console.log(data.name);
        //     res.write(JSON.stringify(data) + ',');
        // });
        // stream.on('end', () => res.end(']'));
    }
    else {
        const stream = fs.createReadStream('index.html', { encoding: 'utf8' });
        stream.pipe(res);
    }


}).listen(3000);
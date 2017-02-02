const fs = require('fs');

// Expose our functionality, has to be async
function readFile(filename, cb) {
    // our function might do work here prior
    // to calling async API

    // Async API we're consuming
    fs.readFile(filename, (err, data) => {
        if(err) cb(err);
        // or our function might do work here,
        // prior to returning result
        else cb(null, data);
    });
}

readFile('./foo.txt', (err, data) => {
    if(err) console.log('ERROR!', err);
    else console.log(data);
});
const fs = require('fs');

function readFile(filename, cb) {

    // create the new Promise and return it.
    return new Promise((resolve, reject) => {
        // resolve is the function we should use to return the value
        // reject is the function we should use, to return an ERROR

        console.log('about to read file');

        // put the code to execute here
        fs.readFile(filename, (err, data) => {
            if(err) reject(err);
            else resolve(data);
        });

    });

}

const promise = readFile('./bar.txt');

// success handler :)
promise.then(data => console.log(data));
promise.then(data => console.log(data));
// only an error handler
promise.then(null, err => console.log('ERROR!', err));
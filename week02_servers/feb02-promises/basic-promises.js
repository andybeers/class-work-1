const fs = require('fs');

function readFile(filename, cb) {

    // create the new Promise and return it.
    return new Promise((resolve, reject) => {
        // resolve is the function we should use to return the value
        // reject is the function we should use, to return an ERROR

        // put the code to execute here
        fs.readFile(filename, (err, data) => {
            if(err) reject(err);
            else resolve(data);
        });

    });

}

readFile('./foo.txt')
    // .then takes two arguments:
    .then(
        // success handler :)
        data => console.log(data),
        // failure handler :(
        err => console.log('ERROR!', err)
    );
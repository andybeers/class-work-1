const fs = require('fs-promise');

function readFile(filename, cb) {
    return fs.readFile(filename);
}

readFile('./foo.txt')
    .then(data => console.log(data));
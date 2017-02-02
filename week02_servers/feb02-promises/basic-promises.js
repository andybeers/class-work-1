const fs = require('fs-promise');

// function readFile(filename, cb) {
//     return fs.readFile(filename);
// }

// readFile('./foo.txt')
//     .then(data => console.log(data));

// const filename = 'test.txt';

fs.writeFile(filename, 'This is the file')
    .then(() => {
        return fs.readFile(filename, { encoding: 'utf8' })
            .then(contents => contents.toUpperCase());
    })
    .then(data => {
        console.log('second chained then', data);
    });

// Promise.resolve(12).then(value => console.log(value));

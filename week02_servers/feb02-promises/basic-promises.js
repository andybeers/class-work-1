const fs = require('fs-promise');

fs.writeFile('text.txt', 'this is the test file')
    .then(() => fs.readFile('text.txt', 'utf8'))
    .catch(err => {
        if(err.code === 'ENOENT') throw new Error('that file doesn\'t exist');
        else throw err;
    })
    .then(contents => {
        if(!contents.length) {
            throw new Error('file has no contents to upper case');
        }
        return contents.toUpperCase();
    })
    .then(upper => console.log(upper))
    .catch(err => console.log('fail', err))
    .then(() => console.log('zombie handler! after the catch'));


// fs.writeFile('text.txt', 'this is the test file')
//     .then(() => fs.readFile('test.txt', 'utf8'))
//     .then(contents => contents.toUpperCase())
//     .then(
//         upper => console.foo.log(upper),
//         err => console.log('fail', err)
//     );


Promise.resolve(42)
    .catch(err => console.log('fail', err))
    .then(val => console.log('resolved', 42));

Promise.reject('born to be rejected')
    .then(val => console.log('resolved', 42))
    .catch(err => console.log('fail', err));

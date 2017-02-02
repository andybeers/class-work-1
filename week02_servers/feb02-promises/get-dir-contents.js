const fs = require('fs-promise');

fs.readdir('.')
    .then(files => {
        const stats = files.map(f => fs.stat(f));
        return Promise.all(stats)
            .then(stats => {
                return files.filter((f, i) => stats[i].isFile());
            });
    })
    .then(files => {
        const promises = files.map(file => fs.readFile(file, 'utf8'));
        return Promise.all(promises);
    })
    .then(results => {
        console.log(results);
    })
    .catch(err => console.log('fail', err));

// Promise.all([
//     fs.readFile('text.txt', 'utf8'),
//     fs.readFile('package.json', 'utf8')
// ])
// // will call then when all promises have resolved
// .then(results => console.log(results))
// // will call catch when any promise rejects
// .catch(err => console.log('fail', err));
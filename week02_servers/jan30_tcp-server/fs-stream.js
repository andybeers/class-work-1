const fs = require('fs');

// fs.readFile('README.md', { encoding: 'utf-8' }, (err, data) => {
//     console.log(data.slice(0,20));
// });

const stream = fs.createReadStream('../../../../../node-v6.3.1.tar.gz', { encoding: 'utf-8' });

stream.on('data', chunk => {
    console.log('got chunk', chunk.length);
});

stream.on('end', () => {
    console.log('file read done!')
})
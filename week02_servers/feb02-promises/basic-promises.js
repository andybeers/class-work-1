const fs = require('fs-promise');

fs.readFile('bad.txt', 'utf8')
    .then(contents => console.log('read complete'))
    //.then(null, err => console.log('fail', err));
    // below v, is same as above ^
    .catch(err => console.log('fail', err));
   
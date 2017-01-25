const fs = require('fs');
const path = require('path');

module.exports = function getDirContents(directory, cb) {
    fs.readdir(directory, (err, files) => {
        if(err) return cb(err);

        const results = [];
        let count = files.length;
        files.forEach((file) => {
            const fileName = path.join(directory, file); // dir/bar.txt
            fs.readFile(fileName, { encoding: 'utf8' }, (err, content) => {
                if(err) return cb(err);
                
                results.push(content);
                count--;
                if(!count) {
                    cb(null, results);
                }
            });

        });
    });
};
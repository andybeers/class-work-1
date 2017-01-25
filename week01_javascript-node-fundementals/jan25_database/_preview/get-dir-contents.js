const fs = require('fs');
const path = require('path');

module.exports = function getAllFileContents(dir, cb) {
    
    // read the files in the requested directory
    fs.readdir(dir, (err, files) => {
        // error? then we're done..
        if (err) return cb(err);

        // we need something to put results in
        const results = [];
        
        // files is an array of file names within the dir
        // don't include "index.txt"
        const goodFiles = files.filter(f => f !== 'index.txt');
        goodFiles.forEach( /*(*/ f /*, index)*/ => {
            // get full path
            const filePath = path.join(dir, f);
            //read this file:
            fs.readFile(filePath, 'utf-8', (err, content) => {
                if (err) return cb(done);

                const newLength = results.push(content);

                if(newLength >= goodFiles.length) {
                    cb(null, results);
                }
            });
        });
        
    });
}
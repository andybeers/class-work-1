const assert = require('assert');
const indexDir = require('../lib/index-dir');
const fs = require('fs');
const path = require('path');

describe('index directory', () => {

    // point to the test dir
    const dir = './test/test-dir';
    // make the readable file name
    const indexFile = path.join(dir, indexDir.indexFileName);

    before(done => {
        fs.unlink(indexFile, (err) => {
            done();
        });
    });    
    
    after(done => {
        fs.unlink(indexFile, (err) => {
            done();
        });
    });

    it('make index', done => {

        // call our function
        indexDir(dir, (err) => {
            // fail if an err
            if(err) return done(err);

            // read the contents of the index file
            fs.readFile(indexFile, { encoding: 'utf8'}, (err, content) => {
                // no workie, done...
                if(err) return done(err);
                
                // check the contents
                assert.equal(content, 'bar.txt\nfoo.txt\nqux.txt');
                
                // tell mocha we passed
                done();

            });            
        });
    });

});
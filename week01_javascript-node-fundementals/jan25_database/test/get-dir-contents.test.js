const assert = require('assert');
const getDirContents = require('../lib/get-dir-contents');

describe('get directory contents', () => {

    it('get file contents', done => {
        // this won't work, result isn't available till later...
        // const result = getDirContents('./test/test-dir');
        // assert.deepEqual(result, ['BAR', 'FOO', 'QUX']);

        getDirContents('./test/test-dir', (err, result) => {
            if(err) done(err);

            assert.deepEqual(result, [
                'BAR CONTENTS', 
                'FOO CONTENTS', 
                'QUX CONTENTS'
            ]);
            done();
        });
    });

    it('errs on bad directory', done => {
        getDirContents('./test/bad-dir', (err, result) => {
            if(err) done();
            else done('expected a return error');
        });
        
    });

});
const assert = require('assert');
const fs = require('fs');
const BitmapHeader = require('../lib/bitmap-header');
const BitmapTransformer = require('../lib/bitmap-transformer');
const invert = require('../lib/invert-transform');

describe('bitmap file', () => {

    let buffer = null;
    before(done => {
        fs.readFile('./test/non-palette-bitmap.bmp', (err, _buffer) => {
            if(err) done(err);
            else {
                buffer = _buffer;
                done();
            }
        });
    });

    it('reads header', () => {
        const header = new BitmapHeader(buffer);
        assert.equal(header.pixelOffset, 54);
        assert.equal(header.bitsPerPixel, 24);
        assert.equal(header.fileSize, 30054);
        assert.equal(header.isPaletted, false);
    });

    it('invert transforms correct', () => {
        // transform the buffer, compare to 
        // testing "standard" 
    });

    it('test transform', done /*()*/ => {
        const bitmap = new BitmapTransformer(buffer);
        bitmap.transform(invert);
        // const buffer = fs.readFileSync('./test/output.bmp');
        assert.deepEqual(bitmap.buffer, buffer);
        
        fs.readFile('./test/output.bmp', (err, buffer) => {
            assert.deepEqual(bitmap.buffer, buffer);
            done();
        });
    });



    describe('transformations', () => {
        it('inverts color', () => {
            const color = { r: 100, g: 100, b: 100 };
            const inverted = invert(color);
            assert.deepEqual(inverted, { r: 155, g: 155, b: 155 });
        })
    });

});
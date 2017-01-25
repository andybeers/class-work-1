const assert = require('assert');
const addOne = require('../lib/add-one');

describe('add one', function() {
    it('adds', function() {
        var output = addOne(3);
        assert.equal(output, 4);
    });

    it('returns NaN if NaN', function() {
        var output = addOne();
        assert.ok(isNaN(output));
    });
});
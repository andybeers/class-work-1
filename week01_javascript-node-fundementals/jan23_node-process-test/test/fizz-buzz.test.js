var assert = require('assert');
var run = require('./run.js');

describe.only('fizz buzz app', function() {
    
    it('count to 5 and get fizz for 3 and buzz for 5', function() {
        var output = run(['fizz-buzz.js', 16]);
        assert.equal(output, [
            1,
            2,
            'fizz',
            4,
            'buzz',
            'fizz',
            7,
            8,
            'fizz',
            'buzz',
            11,
            'fizz',
            13,
            14,
            'fizzbuzz',
            16
        ].join('\n') + '\n');
    });


});
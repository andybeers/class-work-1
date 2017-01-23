var child_process = require('child_process');
var assert = require('assert');

it('greets by name', function() {
    var actual = child_process.execFileSync(
        'node',
        ['greet.js', 'marty'],
        { encoding: 'utf8' }
    );

    var expected = 'hello marty';

    assert.equal(actual, expected);

});
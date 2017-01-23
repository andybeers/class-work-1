var child_process = require('child_process');
var assert = require('assert');

it('greets by name', function() {
    var output = child_process.execFileSync(
        'node',
        ['greet.js', 'marty'],
        { encoding: 'utf8' }
    );
    
    assert.equal(output, 'hello marty');
});

it('uses "stranger" as a default when no name provided', function() {
    var output = child_process.execFileSync(
        'node',
        ['greet.js'],
        { encoding: 'utf8' }
    );

    assert.equal(output, 'hello stranger');
});
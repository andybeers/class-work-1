var child_process = require('child_process');
var assert = require('assert');

function run(args) {
    return child_process.execFileSync(
        'node',
        args,
        { encoding: 'utf8' }
    );
}

it('greets by name', function() {
    var output = run(['greet.js', 'marty']);
    assert.equal(output, 'hello marty');
});

it('uses "stranger" as a default when no name provided', function() {
    var output = run(['greet.js']);
    assert.equal(output, 'hello stranger');
});
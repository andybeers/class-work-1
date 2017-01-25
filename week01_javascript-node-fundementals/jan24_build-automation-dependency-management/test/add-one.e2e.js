const assert = require('assert');
const child_process = require('child_process');

function run(args) {
    return child_process.execFileSync(
        'node',
        args,
        { encoding: 'utf8' }
    );
}

describe('add one cli', function() {
    it('runs adds one', function() {
        var output = run(['cli.js', '3']);
        assert.equal(output, '4');
    });
});
const cmd = require('child_process');
const assert = require('assert');

// 3

// function run(args) {
//     return cmd.execFileSync('node', args, { encoding: 'utf8' });
// }

// 1
it('should greet by name passed as arg', () => {    
    const actual = cmd.execFileSync('node', ['foo.js', 'marty'], { encoding: 'utf8' });
    const expected = 'hello marty'
    assert.equal(actual, expected);
});

// 2
it('should give custom greeting when no name supplied', () => {    
    const actual = cmd.execFileSync('node', ['foo.js'], { encoding: 'utf8' });
    const expected = 'why so shy?'
    assert.equal(actual, expected);
});
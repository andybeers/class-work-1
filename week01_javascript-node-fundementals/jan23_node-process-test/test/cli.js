const cmd = require('child_process');
const assert = require('assert');

it('should greet by name passed as arg', () => {    
    const actual = cmd.execFileSync('node', ['foo.js', 'marty'], { encoding: 'utf8' });
    const expected = 'hello marty'
    assert.equal(actual, expected);
});

it('should give custom greeting when no name supplied', () => {    
    const actual = cmd.execFileSync('node', ['foo.js'], { encoding: 'utf8' });
    const expected = 'why so shy?'
    assert.equal(actual, expected);
});
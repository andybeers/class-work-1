const cmd = require('child_process');

const actual = cmd.execFileSync('node', ['foo.js', 'marty'], { encoding: 'utf8' });


const expected = 'hello marty'

if(actual === expected) {
    console.log('pass!');
}
else {
    throw new Error(`
    FAIL
    expected: "${expected}"
    actual:  "${actual}"
`);

}
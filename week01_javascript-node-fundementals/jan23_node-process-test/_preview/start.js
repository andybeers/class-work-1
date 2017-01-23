const child_process = require('child_process');

const actual = child_process.execFileSync('node', ['greet.js', 'marty'], { encoding: 'utf8' });
const expected = 'hello marty';

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
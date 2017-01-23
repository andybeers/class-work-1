// built-in node module that allows us to "spawn" a new child process
var child_process = require('child_process');
// use this command to capture the output of the process we run
var actual = child_process.execFileSync(
    'node', // main thing to run
    ['greet.js', 'marty'], // arguments to supply
    { encoding: 'utf8' } // not ready for binary, utf8 string please!
);

var expected = 'hello marty';

// Is this a passing test?
if(actual === expected) {
    console.log('PASS!');
}
else {
    // throw an error on failure
    throw new Error(`
        FAIL
        expected: "${expected}"
        actual:  "${actual}"
    `);
}
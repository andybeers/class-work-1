// entire line typed in as "command" seperated by " "

var name = process.argv[2] || 'stranger';

// same as testing after the fact:
// if(!name) name = 'stranger';

process.stdout.write(`hello ${name}`);

// you can make multiple writes to stdout...
// process.stdout.write('hello ');
// process.stdout.write(name);
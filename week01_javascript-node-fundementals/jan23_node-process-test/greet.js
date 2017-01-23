// entire line typed in as "command" seperated by " "

var name = process.argv[2] || 'stranger';

// same as testing after the fact:
// if(!name) name = 'stranger';

process.stdout.write(`hello ${name}`);
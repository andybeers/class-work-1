const addOne = require('./lib/add-one');
const figlet = require('figlet');

const added = addOne(+process.argv[2]);

const display = figlet.textSync(`The answer is ${added}`);

process.stdout.write(display);
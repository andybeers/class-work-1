const addOne = require('./lib/add-one');

const added = addOne(+process.argv[2]);
process.stdout.write(`${added}`);
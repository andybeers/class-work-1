const name = process.argv[2];
const message = name ? `hello ${name}` : 'why so shy?';
process.stdout.write(message);
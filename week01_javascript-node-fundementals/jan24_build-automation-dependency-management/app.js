const upper = require('./upper');
const Person = require('./Person');

const person = new Person('Harry', 'Potter');

// this would break
console.log(person.first + ' ' + person.last);

// this would not break
console.log(person.getName());

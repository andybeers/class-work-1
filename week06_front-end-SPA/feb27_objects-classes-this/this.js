// const assert = require('assert');

// const obj = { name: 'bound' };
// const obj2 = { name: 'two' };
// const obj3 = { name: 'three' };

// function say(salutation = 'hi', number = 7) {
//     return salutation + ' ' + this.name + ' ' + number;
// }

// const person = {
//     name: 'fred',
//     greet() {
//         return 'hi ' + this.name;
//     }
// };

// function sayIt(greeting) {
//     console.log(greeting());
// }

// sayIt(person.greet.bind(person));

const obj = {
    name: 'test object',
    getDoer() {
        doAsyncCall()
            .then(result => {
                this.name = result.name;
            })
            
        return doIt;
    }
};

const fn = obj.getDoer();
console.log(fn.call({ name: 'outside' })); 
'use strict';

var _chai = require('chai');

var _foo = require('../foo');

console.log(_foo.bar);
(0, _foo.changeBar)('qux');
console.log(_foo.bar);

describe('array', () => {

    it('sort', () => {
        // in-place
        const words = ['foo', 'bar', 'qux'];
        words.sort();
        _chai.assert.deepEqual(words, ['bar', 'foo', 'qux']);

        const numbers = [2, 4, 10, 5];
        numbers.sort((a, b) => a - b);
        _chai.assert.deepEqual(numbers, [2, 4, 5, 10]);
    });

    // these return new arrays or the specific items
    describe('predicate', () => {

        const numbers = [1, 5, 30, 7, 23];

        // returns new array with members that pass the filter predicate
        it('filter', () => {
            // "true" means include in filtered results
            const filtered = numbers.filter(number => number < 10);
            _chai.assert.deepEqual(numbers, [1, 5, 30, 7, 23]);
            _chai.assert.deepEqual(filtered, [1, 5, 7]);
        });

        // returns the first item that passes the filter predicate
        it('find', () => {
            const number = numbers.find(n => n === 7);
            _chai.assert.equal(number, 7);
            const noNumber = numbers.find(n => n === -45);
            _chai.assert.isUndefined(noNumber);
        });

        // returns the index of the first item that passes the filter predicate
        it('findIndex', () => {
            const index = numbers.findIndex(n => n === 7);
            _chai.assert.equal(index, 3);
            const noIndex = numbers.findIndex(n => n === -53);
            _chai.assert.equal(noIndex, -1);

            // in this, because we are finding on the thing in the array, same as:
            const indexOf = numbers.indexOf(7);
            _chai.assert.equal(indexOf, 3);
            const notIndexOf = numbers.indexOf(-53);
            _chai.assert.equal(notIndexOf, -1);
        });

        // some - true/false if at least one item matches
        // every - true/false if all items match predicate
        // any - true/false
    });

    describe('foreach/map', () => {
        const numbers = [1, 5, 30, 7, 23];
        const people = [{}, {}, {}];

        it('forEach', () => {
            // performs the function for each item in array
            let total = 0;
            numbers.forEach(n => {
                total += n;
            });
            _chai.assert.equal(total, 66);

            // most array functions are (item, index, array)
            people.forEach((p, i) => p.name = 'name' + i);
            _chai.assert.deepEqual(people, [{ name: 'name0' }, { name: 'name1' }, { name: 'name2' }]);
        });

        it('forEach with hole', () => {
            const holey = [1, 4,,, 7, 2];
            let count = 0;
            holey.forEach(e => count++);
            _chai.assert.equal(count, 4);
        });

        it('map', () => {
            // returns a new array with each item created from the supplied function
            // and the original array item
            const newNumbers = numbers.map(n => n * 2);
            _chai.assert.deepEqual(newNumbers, [2, 10, 60, 14, 46]);

            const objs = numbers.map((n, i) => {
                ``;
                const prop = String.fromCharCode(97 + i);;
                return { [prop]: n };
            });

            _chai.assert.deepEqual(objs, [{ a: 1 }, { b: 5 }, { c: 30 }, { d: 7 }, { e: 23 }]);
        });

        it('map has holes', () => {
            const holey = [1, 4,,, 7, 2];
            let count = 0;
            const mapped = holey.map(n => {
                count++;
                return n;
            });
            _chai.assert.equal(mapped.length, holey.length);
            _chai.assert.equal(count, 4);
        });
    });

    describe('chaining', () => {
        const numbers = [1, 5, 30, 7, 23];
        const people = [{}, {}, {}];

        it('chaining filter, map', () => {
            const objsOver10 = numbers.filter(n => n > 10) // [30, 23]
            .map(n => ({ number: n })); // [{ n: 30 }, { n: 23 }]

            _chai.assert.deepEqual(objsOver10, [{ number: 30 }, { number: 23 }]);
        });
    });
});


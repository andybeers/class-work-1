import { assert } from 'chai';
import { default as obj, add, bar } from '../foo';

/* core difference in CJS vs ES6 module syntax */
// import--
// const [var name] = require([npm or file path]);
// import [var_name] from [npm or file path];
// export--
// module.exports = [thing to export];
// export default [thing to export];

describe.only('foo', () => {

    it('default export', () => {
        assert.deepEqual(obj, { name: 'hello'});
    });

    it('named export add', () => {
        assert.equal(add(2, 3), 5);
    });

    it('named export bar', () => {
        assert.equal(bar, 'BAR');
    });

});
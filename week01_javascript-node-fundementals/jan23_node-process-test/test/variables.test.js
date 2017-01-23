var assert = require('assert');

describe('variables', function() {
    it('primitives - copies value', function() {
        var x = 12;
        var y = x;
        y = 3;
        assert.equal(x, 12)
    });
    it('primitives - copies value on passing to function', function() {
        function changeValue(n) {
            n = 3;
        }
        var x = 12;
        changeValue(x);
        assert.equal(x, 12)
    });

    it('objects - copies reference to the object', function() {
        var x = { name: 'foo' };
        var y = x;
        y = { name: 'bar' };
        assert.deepEqual(x, { name: 'foo' });
    });

    it('objects - changing a property modifies original object', function() {
        var x = { name: 'foo' };
        var y = x;
        y.name = 'bar';
        assert.deepEqual(x, { name: 'bar' });
    });

    it('functions behave as objects', function() {
        var fn = function(thing) {};
        fn.foo = 'foo';
        assert.equal(fn.foo, 'foo');
    });

});
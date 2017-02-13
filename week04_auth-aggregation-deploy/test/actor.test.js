const Actor = require('../lib/models/actor');

describe('actor model', () => {

    function testHasValidationError(data) {
        return new Actor(data)
            .validate()
            .then(
                () => { throw new Error('validation should not have succeeded'); },
                () => { /* err was expected, nothing to do */ }
            );
    }

    it('requires a name', () => {
        return testHasValidationError({ dob: new Date() });
    });

    it('requires a dob', () => {
        return testHasValidationError({ name: 'name' });
    });
});
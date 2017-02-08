const assert = require('chai').assert;
const Pet = require('../lib/models/pet');

describe('Pet model', () => {

    it.only('example with all fields', () => {
        return new Pet({
            name: 'tweety',
            type: 'bird',
            favoriteToys: ['swing', 'pond', 'sylvester'],
            legs: 8
        }).validate()
        .then(pet => console.log(pet))
        .catch(err => {console.log(err); throw err});
    });

    it('requires name (validation fails when no name)', () => {
        const pet = new Pet({ type: 'cat' });
        return pet.validate()
            .then(
                () => { throw new Error('validation should not pass'); },
                err => assert.isNotNull(err)
            );
    });

    it('types of "dog", "cat", "bird", "lizard" are accepted', () => {
        const good = ['dog', 'cat', 'bird', 'lizard']
            .map(type => new Pet({ name: type, type }).validate());

        return Promise.all(good);
    });

    it('validation error if non-accepted type', () => {
        return new Pet({ name: 'name', type: 'spider' })
            .validate()
            .then(
                () => { throw new Error('validation should not pass'); },
                err => assert.isNotNull(err)
            );
    });
});
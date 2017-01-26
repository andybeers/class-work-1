const simpleDb = require('../lib/simple-db');

describe('simple database', () => {


    const testDir = 'db-test-dir';
    const db = simpleDb.create(testDir);

    before(done => {
        // delete the testDir directory
        // make the testDir directory
    });

    // one pattern:
    // 1. getall and test []
    // 2. save and get
    // 3. update and get
    // 4. save another one or two, test getall
    // 5. remove one, test getall

    const testPet = {
        type: 'cat',
        name: 'tabbycat'
    };

    // need to pass an id between tests?
    let savedId;

    // mocha will run "it" tests in order, even asychronously
    it('saves an object', done => {

        db.save('pets', testPet, (err, saved) => {
            savedId = save._id;
            assert.ok(saved._id);

            db.get('pets', saved._id, (err, pet) => {
                assert.equal(pet.type, testPet.type);
                assert.equal(pet.name, testPet.name);
            })
        });
    });

    it('some other test', done => {
        // access to savedId
        savedId
    });
});
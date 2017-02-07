const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const connection = require('../lib/connection');

const app = require('../lib/app');

describe('pets REST HTTP API', () => {

    const DB_URI = 'mongodb://localhost:27017/pets-test';
        
    before(() => connection.connect(DB_URI));
    before(() => connection.db.dropDatabase());
    after(() => connection.close());

    const request = chai.request(app);

    it('GET returns empty array of pets', () => {
        return request.get('/pets')
            .then(req => req.body)
            .then(pets => assert.deepEqual(pets, []));
    });

    const testPet = {
        name: 'garfield',
        type: 'cat'
    };

    let id = '';

    it('saves a pet', () => {
        return request.post('/pets')
            .send(testPet)
            .then(res => {
                const savedPet = res.body;
                assert.equal(savedPet.name, testPet.name);
                assert.equal(savedPet.type, testPet.type);
                assert.isOk(savedPet._id);
                id = savedPet._id;
            });
    });

    it('get saved pet', () => {
        return request.get(`/pets/${id}`)
            .then(res => {
                const savedPet = res.body;
                assert.equal(savedPet.name, testPet.name);
                assert.equal(savedPet.type, testPet.type);
                assert.equal(savedPet._id, id);
            });
    });

});
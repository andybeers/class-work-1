const mkdirp = require('mkdirp');

const pets = [];
let id = 1;

module.exports = function createDb(baseDir) {

    // given logic for your db server, make sure diretory exists
    mkdirp(baseDir);

    return {
        getAll(table, cb) {
            setTimeout(() => {
                cb(null, pets);
            });
        },

        get(table, id, cb) {
            setTimeout(() => {
                const found = pets.find(p => p._id === id);
                cb(null, found);
            });
        },

        save(table, pet, cb) {
            setTimeout(() => {
                pet._id = id++;
                pets.push(pet);
                cb(null, pet);
            });
        }
    };
};

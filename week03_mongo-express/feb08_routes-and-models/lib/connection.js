const MongoClient = require('mongodb').MongoClient;

/* uri for the databse */
// 'mongodb://localhost:27017/mythical-animals';
// protocol: mongodb
// server: localhost (for dev)
// port: 27107 (default)
// database name: mythical-animals

module.exports = { 
    db: null,
    connect(dbUri) {
        if(this.db) return Promise.reject('Already connected to db');
        return MongoClient.connect(dbUri)
            .then(db => this.db = db);
    },
    close() {
        if(!this.db) return Promise.resolve();
        return this.db.close()
            .then(result => {
                this.db = null;
                return result;
            });
    }
};
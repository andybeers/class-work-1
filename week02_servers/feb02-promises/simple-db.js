const fs = require('fs-promise');

module.exports = function(baseDir) {

    return {
        getAll(tableName) {
            const path = getPath(baseDir, tableName);
            return fs.readFile(path);
        }
    }
}
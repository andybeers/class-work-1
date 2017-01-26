
// option 1, use a "class":
function Db(directory){
    this.directory = directory;
}
Db.prototype.save = function() {}

// option 2, use a revaling "module" patern:
function makeDb(directory) {

    return {
        save: function() {

        },
        ///
    }
}


module.exports = {
    create: function(directory) {
        return new Db(directory); //option 1
        return makeDb(directory); //option 2
        
        // option 3, inline here:
        return {
            save: function() {

            }
            //
        }
    }
}
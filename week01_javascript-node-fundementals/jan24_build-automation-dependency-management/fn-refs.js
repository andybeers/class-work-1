// var stdout = process.stdout;
// stdout.write('i work');
// var write = stdout.write;
// write('i don\'t work\n');

var person = {
    name: 'jo',
    greet: function() {
        return `hello ${this.name}`;
    }
};

console.log(person.greet());
var greet = person.greet;

var other = { name: 'sally' };
other.greet = greet;
console.log(other.greet());
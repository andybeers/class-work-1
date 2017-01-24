function Person(first, last) {
    this.first = first;
    this.last = last;
}

Person.prototype.getName = function() {
    return `${this.last}, ${this.first}`;
};

module.exports = Person;
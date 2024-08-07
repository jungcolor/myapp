var personContext;
(function (personContext) {
    var Person = /** @class */ (function () {
        function Person(msg) {
            this.msg = msg;
        }
        Person.prototype.speak = function () {
            console.log(this.msg);
        };
        return Person;
    }());
    var tom = new Person("hello");
    tom.speak();
})(personContext || (personContext = {}));

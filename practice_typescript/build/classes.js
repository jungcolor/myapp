var personContext;
(function (personContext) {
    class Person {
        constructor(msg) {
            this.msg = msg;
        }
        speak() {
            console.log(this.msg);
        }
    }
    const tom = new Person("hello");
    tom.speak();
})(personContext || (personContext = {}));

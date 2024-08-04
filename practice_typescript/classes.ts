namespace personContext {
    class Person {
        constructor(private msg) {}
        speak() {
            console.log(this.msg);
        }
    }

    const tom = new Person("hello");
    tom.speak();
}

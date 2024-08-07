class ClassA {
    constructor() { }
    static setFullName(name) {
        ClassA.typeName = name;
    }
    static getFullName() {
        return `ClassA ${ClassA.typeName}`;
    }
}
const a = new ClassA();
const typeName = ClassA.setFullName("nori");
console.log(ClassA.getFullName());
class Runner {
    constructor(typeName) {
        this.typeName = typeName;
    }
    run() {
        Runner.lastRunTypeName = this.typeName;
    }
}
const run1 = new Runner("a");
const run2 = new Runner("b");
run2.run();
run1.run();
console.log(Runner.lastRunTypeName);

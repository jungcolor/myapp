var ClassA = /** @class */ (function () {
    function ClassA() {
    }
    ClassA.setFullName = function (name) {
        ClassA.typeName = name;
    };
    ClassA.getFullName = function () {
        return "ClassA ".concat(ClassA.typeName);
    };
    return ClassA;
}());
var a = new ClassA();
var typeName = ClassA.setFullName("nori");
console.log(ClassA.getFullName());
var Runner = /** @class */ (function () {
    function Runner(typeName) {
        this.typeName = typeName;
    }
    Runner.prototype.run = function () {
        Runner.lastRunTypeName = this.typeName;
    };
    return Runner;
}());
var run1 = new Runner("a");
var run2 = new Runner("b");
run2.run();
run1.run();
console.log(Runner.lastRunTypeName);

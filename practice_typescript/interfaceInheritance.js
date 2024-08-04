var InterfaceContext;
(function (InterfaceContext) {
    var Motorcycle = /** @class */ (function () {
        function Motorcycle(name) {
            // no super for interfaces
            this.name = name;
        }
        Motorcycle.prototype.updateWheelCount = function (newWheelCount) {
            this.wheelCount = newWheelCount;
            console.log("AUtomobile has ".concat(this.wheelCount));
        };
        Motorcycle.prototype.showNumberofWheels = function () {
            console.log("moved Automobile ".concat(this.wheelCount, " miles"));
        };
        Motorcycle.prototype.getFullName = function () {
            return "MC-".concat(this.name);
        };
        return Motorcycle;
    }());
    var moto = new Motorcycle("beginner-cycle");
    console.log(moto.getFullName());
})(InterfaceContext || (InterfaceContext = {}));

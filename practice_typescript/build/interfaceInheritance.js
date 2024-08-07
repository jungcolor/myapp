var InterfaceContext;
(function (InterfaceContext) {
    class Motorcycle {
        constructor(name) {
            // no super for interfaces
            this.name = name;
        }
        updateWheelCount(newWheelCount) {
            this.wheelCount = newWheelCount;
            console.log(`AUtomobile has ${this.wheelCount}`);
        }
        showNumberofWheels() {
            console.log(`moved Automobile ${this.wheelCount} miles`);
        }
        getFullName() {
            return `MC-${this.name}`;
        }
    }
    const moto = new Motorcycle("beginner-cycle");
    console.log(moto.getFullName());
})(InterfaceContext || (InterfaceContext = {}));

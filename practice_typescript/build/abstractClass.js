var AbstractContext;
(function (AbstractContext) {
    class Vohicle {
        constructor(wheelCount) {
            this.wheelCount = wheelCount;
        }
        showNumberOfWheels() {
            console.log(`moved ${this.wheelCount} miles`);
        }
    }
    class Motorcycle extends Vohicle {
        constructor() {
            super(2);
        }
        updateWheelCount(newWheelCount) {
            this.wheelCount = newWheelCount;
            console.log(`Motorcycle has ${this.wheelCount}`);
        }
    }
    class Automobile extends Vohicle {
        constructor() {
            super(4);
        }
        updateWheelCount(newWheelCount) {
            this.wheelCount = newWheelCount;
            console.log(`Automobile has ${this.wheelCount}`);
        }
        // override
        showNumberOfWheels() {
            console.log(`moved Automobile ${this.wheelCount} miles`);
        }
    }
    const motorCycle = new Motorcycle();
    motorCycle.updateWheelCount(1);
    console.log(motorCycle.showNumberOfWheels());
    const autoMobile = new Automobile();
    autoMobile.updateWheelCount(3);
    console.log(autoMobile.showNumberOfWheels());
})(AbstractContext || (AbstractContext = {}));

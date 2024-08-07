namespace AbstractContext {
    abstract class Vohicle {
        constructor(protected wheelCount: number) {}

        // 상속받은 하위 클래스에서 무조건 구현해야하는 추상메서드
        abstract updateWheelCount(newWheelCount: number): void;

        showNumberOfWheels() {
            console.log(`moved ${this.wheelCount} miles`);
        }
    }

    class Motorcycle extends Vohicle {
        constructor() {
            super(2);
        }

        updateWheelCount(newWheelCount: number): void {
            this.wheelCount = newWheelCount;
            console.log(`Motorcycle has ${this.wheelCount}`);
        }
    }

    class Automobile extends Vohicle {
        constructor() {
            super(4);
        }

        updateWheelCount(newWheelCount: number): void {
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
}

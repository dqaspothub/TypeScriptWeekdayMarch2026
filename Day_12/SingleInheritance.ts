class Vehicle {
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  start() {
    console.log(`${this.brand} vehicle started`);
  }
}

class Car extends Vehicle {
  drive() {
    console.log(`${this.brand} car is driving`);
  }
}

const c = new Car("Toyota");
c.start();  // inherited
c.drive();  // own method
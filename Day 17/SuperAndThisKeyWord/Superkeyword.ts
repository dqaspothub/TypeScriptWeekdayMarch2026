class Parent {
  name: string;

  constructor(name: string) {
    this.name = name;
    console.log("Parent constructor called");
  }
}

class Child extends Parent {
  age: number;

  constructor(name: string, age: number) {
    super(name); // calling parent constructor
    this.age = age;
    console.log("Child constructor called");
  }
}

const obj = new Child("John", 20);
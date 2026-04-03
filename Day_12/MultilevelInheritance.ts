class Animal {
  eat() {
    console.log("Animal eats food");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog barks");
  }
}

class Puppy extends Dog {
  weep() {
    console.log("Puppy weeps");
  }
}

const p = new Puppy();
p.eat();   // from Animal
p.bark();  // from Dog
p.weep();  // from Puppy
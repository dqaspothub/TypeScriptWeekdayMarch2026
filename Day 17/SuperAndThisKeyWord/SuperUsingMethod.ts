class Animalss {
  speaks() {
    console.log("Animal makes sound");
  }
}

class Dogss extends Animalss {
  speak() {
    super.speaks(); // calling parent method
    console.log("Dog barks");
  }
}

const d8 = new Dogss();
d8.speaks();

/* | Feature   | `this`                        | `super`                           |
| --------- | ----------------------------- | --------------------------------- |
| Refers to | Current object                | Parent class                      |
| Usage     | Access own properties/methods | Access parent constructor/methods |
| Scope     | Same class                    | Parent class                      |
 */
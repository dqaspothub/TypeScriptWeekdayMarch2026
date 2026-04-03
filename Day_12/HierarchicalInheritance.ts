class Animals {
  eats() {
    console.log("Eating...");
  }
}

class Dogs extends Animals {
  barks() {
    console.log("Dog barks");
  }
}

class Cats extends Animals {
  meows() {
    console.log("Cat meows");
  }
}

const d = new Dogs();
d.eats();   // from parent
d.barks();  // own

const c1 = new Cats();
c1.eats();   // from parent
c1.meows();  // own
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const p4 = new Person("John");
console.log(p4.name);

/* 
✅ Constructor runs automatically
✅ Used for initialization
✅ Only one constructor per class
✅ Use this to assign values
✅ Supports default values and logic */
class User {
  constructor(public name: string = "Guest") {}
}

const u1 = new User();
const u2 = new User("Alex");

console.log(u1.name); // Guest
console.log(u2.name); // Alex
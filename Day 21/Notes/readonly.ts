class User {
  readonly id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;     // ✅ Allowed (initial assignment)
    this.name = name;
  }
}

const user = new User(1, "John");

user.name = "Alice"; // ✅ Allowed
// user.id = 2;      ❌ Error: Cannot assign to 'id' because it is a read-only property


const numbers: readonly number[] = [1, 2, 3];

// numbers.push(4); ❌ Error
// numbers[0] = 10; ❌ Error
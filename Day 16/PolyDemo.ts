
class Calculations {
  // Overload signatures
  additions(a: number, b: number): void;
  additions(a: number, b: number, c: number): void;

  // Single implementation
  additions(a: number, b: number, c?: number): void {
    if (c !== undefined) {
      console.log(a + b + c);
    } else {
      console.log(a + b);
    }
  }
}

const calc = new Calculations();
calc.additions(2, 3);      // Output: 5
calc.additions(2, 3, 4);   // Output: 9

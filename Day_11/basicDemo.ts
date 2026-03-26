let username1: string = "testuser";
let age1: number = 25;
let isLoggedIn: boolean = true;
let data: null = null;
let value1: undefined = undefined;

let value: any = "test";
value = 10;
value = true;

let value2: unknown = "test";

if (typeof value2 === "string") {
  console.log(value2.toUpperCase());
}

//tuple

let user2: [string, number] = ["admin", 25];

//union type

let id: string | number;

id = "abc";
id = 123;


//Literal Types

let status1: "success" | "failure" ;

status1 = "success"; // ✅
//status1 = "pending"; // ❌

//👉 Restricts to specific values

function addition(a: number, b: number): number {
  return a + b;
}


let users1: string[] = ["user1", "user2"];


let user1: { 
  name: string; 
  age: number } = {
  name: "John",
  age: 30
};

user1.name;


// type alias

type User = {
  username: string;
  password: string;
};


let loginUser: User = {
  username: "test",
  password: "123"
};

// Optional value

function greetings(name: string, msg?: string) {
  console.log(name, msg || "Hello");
}

enum Role {Admin,User,Guest}

enum result {PASS,FAIL}

let StatusOfStudent : result = result.PASS;

let userRole: Role = Role.Admin;

//👉 Used for fixed constants


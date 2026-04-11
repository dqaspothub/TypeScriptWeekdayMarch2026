function greet(name) {
  console.log("Hello " + name);
}

function greetings(name,age) {
  console.log("Hello " + name);
    console.log("age " + age);

}

function processUserInput(callback) {
  const name = "John";
  callback(name); // calling the callback function
}

processUserInput(greet);
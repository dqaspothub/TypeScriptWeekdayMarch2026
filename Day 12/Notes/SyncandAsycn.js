console.log("Start");

function task1() {
  console.log("Task 1 running...");
}

function task2() {
  console.log("Task 2 running...");
}

task1();
task2();

console.log("End");


console.log("End");


console.log("Start");

setTimeout(() => {
  console.log("Task 1 done");
}, 2000);

console.log("End");
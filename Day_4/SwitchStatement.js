let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}


let results = "Test";

switch(results){
case "PASS":
  console.log("Your scored good marks");
  break;
case "FAIL":
  console.log("Your not scored good marks");
  break;
default:
  console.log("Study Well");
}

for (let i = 1; i <= 5; i++) {
  if (i === 3)
break;
  console.log(i);
}

for (let i = 1; i <= 5; i++) {
  if (i === 3){
continue;
  } 
  console.log(i);
}
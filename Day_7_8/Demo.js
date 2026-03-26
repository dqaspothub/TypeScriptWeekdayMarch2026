const nums = [1,2,3,4,5];

nums.forEach((num,index) => {

    console.log(num*2);
    
});

const values = nums.map(num => num * 2);

console.log(values);


const even = nums.filter(num => num % 2 === 0);

console.log(even);

const greaterValue = nums.find(num => num > 3);

console.log(greaterValue);
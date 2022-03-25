// Script
let Students = new Set([]);
Students.add('abdo')
    .add('ehab')
    .add('ahmed')
    .add('abdo')
    .add('abdo')
    .add('ehab')
    .add('Zaki')
    .add('Jou')
    .add('ehab');

const arr = [...Students];

for (let stu of Students) {
    console.log(stu);
}

//a. Try to add repeated names, will the set accept it?
// it takes only one input from the repearted inputs

//b. print with spread

console.log("print with spread: " + " " + arr);
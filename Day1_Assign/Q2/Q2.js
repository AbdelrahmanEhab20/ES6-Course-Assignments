// Script

// The JavaScript for in statement loops through 
//the properties of an Object:
// for (key in object) {
//     // code block to be executed
//   }
const human = { fname: "ABDO", lname: "EHAB", age: 21 };

let empty = "";
for (let a in human) {
    empty += human[a] + " , ";
}
console.log("  " + empty)
// Do not use for in over an Array if the index order is important.
// The index order is implementation-dependent, 
//and array values may not be accessed in the order you expect.
// It is better to use a for loop, a for of loop, or Array.forEach()
// when the order is important.
////////////////////////////////////////////////////////////////////////*//////**///////////////////////////////

//ForEach used At the Question One

/*********************************************************************************////////////////////////////// */
//For of 
const arr = [1, 2, 3, 4, 5, 6];

for (let Ele of arr) {
    Ele *= Ele;
    console.log(Ele);
}

// The for...of statement creates a loop iterating over iterable objects,
//  including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables.
//  It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.


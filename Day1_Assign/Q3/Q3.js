// Script
//Try spread operator with any array of your implementation.

//The new spread operator is marked with 3 dots (…), 
//and we can use it to sign the place of multiple expected items.

//Most Important Usage OF Spread OPerator
// inserting the elements of an array into another array.
// We can also take leverage of the spread operator in function calls in which we want to pass in arguments from an array.
let Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function MULTIPLY(x, y, z, a, b, c) {
    return (x * y * z * a * b * c);
}
function Sum(x, y, z, a, b, c) {
    return (x + y + z + a + b + c);
}
function Div(x, y, z, a, b, c) {
    return Math.floor(c / b / a / z / y / x);
}
function Sub(x, y, z, a, b, c) {
    return (x - y - z - a - b - c);
}
//10,20,30,40,50,60 (First Six numbers of The array)
console.log(MULTIPLY(...Arr));
console.log(Sum(...Arr));
console.log(Sub(...Arr));
console.log(Div(...Arr));
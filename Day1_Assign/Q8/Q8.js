// script

/********************************************************************************************** */

//1-Object.Assign()
//method to clone an object.
// only carries a shallow clone, not a deep clone.

let square = {
    height: 10,
    width: 20
};

let style = {
    color: 'Red',
    borderStyle: 'solid'
};

let SqureStyle = Object.assign({}, square, style);

console.log(SqureStyle);
//Object
//borderStyle: "solid"
//color: "Red"
///height: 10
//width: 20

/********************************************************************************************** */
//2-Object.is()
// to check if two values are the same.
//The Object.is() behaves like the === operator with two differences:
//-0 and +0
//NaN
let num1 = 7,
    num2 = -7;
console.log(Object.is(num1, num2));//false


/***************************************************************************************** */
//3- proxy
// A Proxy is created with two parameters:
// target: the original object which you want to proxy
// handler: an object that defines which operations will be intercepted and how to redefine intercepted operations.

const person = {
    firstName: 'Abdo',
    lastName: 'Ehab',
    email: 'abdoehab@mail.com',
}
const handler = {
    get(target, handler) {
        console.log(`Property ${handler} has been read.`);
        return target[handler];
    }
}
const proxyUser = new Proxy(person, handler);

// The proxyUser object uses the user object to store data. 
//The proxyUser can access all properties of the user object.
console.log(proxyUser.firstName);
console.log(proxyUser.lastName);
console.log(proxyUser.email);

// SCRIPT
let arr = [10, 15, 20, 5, 17, 18, 19, 20, 100, 150, 140, 123, 37, 89, 99];

//part - 1(فيه باقي قسمة == صح)
var odds = () => {
    document.write("<b>******** Array Filter For odd Numbers::<br>" + arr.filter(n => n % 2) + "<hr>");
}

// //call function
odds();


//part - 2(لو مفيش باقي قسمة )
document.write(`********* Even elements Of Array With ForEach::<br>`);
arr.forEach(element => {
    if (element % 2 == 0) {
        document.write(" " + `${element},`);
    }
})
document.write("<hr>");
//forEach(currentvalue,index,array)

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach((element,i) => {
//     console.log(`index :${i}-element:${element}`)
// })


//part - 3
document.write(`*********  Array.MAP for Square EachElement::<br>`);
const map1 = arr.map(num => num * 2);

document.write(map1 + " ");
document.write("<hr>");

//part - 4
//https://www.section.io/engineering-education/how-to-use-javascript-arrow-functions-and-this-keyword/
//One of the main differences between arrow functions and
//regular functions is that arrow functions can only be anonymous.
//They are not bound to any identifier.

//Thus they created dynamically.We cannot name an arrow 
//function as we do for the regular functions.However,
// if you’d like to call or reuse an arrow function,
// you will need to assign it to a variable.
// const myFunc = (params) => {
//     // function body
//   }

const friend = {
    friend_name: "Mohamed",
    myfriend: function () {
        return `${this.friend_name} is my Friend`;
    },
};
console.log(friend.myfriend()); //output:Mohamed is my Friend

const friend2 = {
    friend_name: "Mohamed",
    my2friend: () => {
        return `${this.friend_name} is my friend.`;
    },
};
console.log(friend2.my2friend());//output:undefined is my friend.

/*(EXPLAINATION)):
It actually makes sense. In the regular function,
a function always defines its this value. Arrow functions
treat this keyword differently.
They don’t define their own context since it doesn’t have its
own this context. They inherit that
from the parent scope whenever you call this.

this in regular function always refers to the context of the
function being called. However, in the arrow function,
this has nothing to do with the caller of the function.
It refers to the scope where the function (the enclosing context)
present. That’s why we get undefined.

*/
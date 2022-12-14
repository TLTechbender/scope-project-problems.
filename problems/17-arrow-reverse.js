/***********************************************************************
Write a function arrowReverseString(str) that accepts a string and returns that string
reversed.

Write this function using a fat arrow function!

Examples:
let result1 = arrowReverseString("hello"); // returns "olleh"
let result2 = arrowReverseString("garden"); // returns "nedrag"
let result3 = arrowReverseString("potato"); // returns "otatop"


***********************************************************************/

// your code here!

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/


const arrowReverseString=string=>{
let array=string.split("");
let modified = array.reverse();
    return modified.join("");
};


let result1 = arrowReverseString("hello"); // returns "olleh"
let result2 = arrowReverseString("garden"); // returns "nedrag"
let result3 = arrowReverseString("potato"); // returns "otatop"
console.log(result1,result2,result3);
try {
  module.exports = arrowReverseString;
} catch (e) {
  // catch the ref err
  module.exports = null;
}

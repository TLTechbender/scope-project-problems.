/***********************************************************************
Write a function `arrowMirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples.

Write this function using an arrow function!

Examples:

arrowMirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
arrowMirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/

// your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
/*const arrowMirrorArray=array=>{
let answer=[];
    let part1=[];
    for(let i=array.length-1; i>=0 ; i--){
        let letters=array[i];
        part1.push(letters);
    }
    answer.push(...array, ...part1);
    return answer;
};
*/
const arrowMirrorArray=array=>{
    const mirrowed=[...array, ...array.reverse()];
    return mirrowed;
}
console.log(arrowMirrorArray([1,2,3])); // => [ 1, 2, 3, 3, 2, 1 ]
console.log(arrowMirrorArray(['a', 'b', 'c', 'd'])); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

try {
  module.exports = arrowMirrorArray;
} catch (e) {
  return null;
}

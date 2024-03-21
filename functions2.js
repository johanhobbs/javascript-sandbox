//Create a function that takes 2-D arrarys and returns the sum on min values in each row
/*
Ex: sumMinArrays([
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
])
output -> 1+6+11 = 18
*/

function sumMinArrays(arr) {
  let sumTotal = 0;

  for (let i = 0; i < arr.length; i++) {
    let y = arr[i][0];
    for (let x = 0; x < arr[i].length; x++) {
      if (y > arr[i][x]) {
        y = arr[i][x];
      }
    }
    sumTotal += y;
  }
  return sumTotal;
}

//ES6
const sumMinArraysNew = (arr) => arr.reduce((a, b) => a + Math.min(...b), 0);

//Create a function that takes an array, return duplicate numbers in new array.
//ArraysDuplicateNumbers([1,2,3,4,5,6,5,1]) output -> [5,1]

//ES5 -Your answer

//ES6 - inline comments here
const ArraysDuplicateNumbers = (arr) => (
  (arr = [
    ...new Set([
      ...arr.filter((num) => arr.indexOf(num) !== arr.lastIndexOf(num)),
    ]),
  ].sort((a, b) => a - b)),
  arr.length ? arr : null
);

console.log(ArraysDuplicateNumbers([1, 2, 3, 4, 3, 6, 1]));

// Create a function that takes an array of numbers or letters and returns a string
// arrayToString([1, 2, 3, 4, 5])

function arrayToString(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result = result + arr[i];
  }
  return result;
}

console.log(arrayToString([6, 7, "Johan", "Red", 10]));

//create a function that takes an array with integers, and transforms that array into a mirror
//arrayToMirror([0, 2, 4, 6, 8]) outputs [0,2,4,6,8,6,4,2,0]
// ES5
// function arrayToMirror(arr) {
//   for (let i = arr.length - 2; i >= 0; i--) {
//     arr.push(arr[i]);
//   }
//   return arr;
// }

// console.log(arrayToMirror([0, 2, 4, 6, 8]));

//ES6
const toMirror = (arr) => [...arr, ...arr.reverse().slice(1)];

console.log(toMirror([0, 2, 4, 6, 8]));

// Create a dunction that returns the total number of arrays inside a given main array.
//totalOfArrays([[1,2,3][4,5,6]]) -> total number of arrays = 2

function totalOfArrays(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      count++;
    }
  }
  return `Array contains ${count} arrays`;
}

console.log(totalOfArrays([[1, 2, 3], [4, 5, 6], 10, [], "puppy"]));

//Takes a number as an argument and returns an array of numbers
//counting down from a given number to zero
function arrayCountdown(num) {
  let array = [];
  for (let i = num; i >= 0; i--) {
    array.push(i);
  }
  return array;
}

console.log(arrayCountdown(5));

const countdownFunction = (num) => Array.from(Array(num + 1).keys()).reverse();

console.log(countdownFunction(10));

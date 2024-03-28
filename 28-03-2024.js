// Create a function that takes an array of stringified numbers as a parameter and return an array of numbers
//Ex: ["1", "3", "6.7"] -> [1, 3, 6.7]

function destringifyArray(arr) {
  let temp = [];
  for (i = 0; i < arr.length; i++) {
    temp[i] = JSON.parse(arr[i]);
  }
  return temp;
}

console.log(destringifyArray(["1", "3", "6.7"]));

let arrayToNumbers = (arr) => arr.map((e) => +e);

console.log(arrayToNumbers(["1", "3", "6.7"]));

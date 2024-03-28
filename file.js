// function that takes two numbers and a math operator (+, -, /, *)
// and will perform a calculation with the given numbers
//  calNum(2, "+", 3) the output is 5

// function calNum(num1, operator, num2) {
//   if (operator == "+") {
//     return num1 + num2;
//   }
//   if (operator == "-") {
//     return num1 - num2;
//   }
//   if (operator == "*") {
//     return num1 * num2;
//   }
//   if (operator == "/") {
//     if (num2 == 0) {
//       return "Cannot divide by zero.";
//     } else {
//       return num1 / num2;
//     }
//   }
// }

// function calNumSwitch(num1, operator, num2) {
//   switch (operator) {
//     case "+":
//       return num1 + num2;
//       break;
//     case "-":
//       return num1 - num2;
//       break;
//     case "*":
//       return num1 * num2;
//       break;
//   }
// }

// function getDayName(day) {
//   const days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   let date = new Date(day);
//   return days[date.getDay()];
// }

// console.log(getDayName("03/25/2024"));

// function nestarray(arr) {
//   if (arr.length == 1) return arr;
//   let temp = [];
//   for (let i = 0; i < arr.length; i++) {
//     temp.push(arr[i]);
//   }
//   return [arr[0], nestarray(temp)];
// }

// console.log(nestarray([0, 1, 2, 24, 43]));

const nestarray2 = (arr) =>
  arr.length === 1 ? arr : [arr[0], nestarray2(arr.slice(1))];
console.log(nestarray2[(1, 2, 3, 3)]);

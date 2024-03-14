//Create a function which takes two strings (p1 and p2) as arguments and returns a string
//stating the winner (Rock, Paper, Scissors)

//NOTE - Game Condition
// if p1 wins return the string "The winner is P1"
// if p2 wins return the string "The winner is P2"
// if they are the same then return "It's a draw"

function rps(p1, p2) {
  if (p1 === p2) return `It's a draw`;
  else if (p1 === "Rock" && p2 === "Scissors") return "The winner is P1";
  else if (p1 === "Paper" && p2 === "Rock") return "The winner is P1";
  else if (p1 === "Scissors" && p2 === "Paper") return "The winner is P1";
  else return "The winner is P2";
}

// console.log(rps("Rock", "Paper"));

//ANCHOR - ES6 Javascript

function rpsTwo(p1, p2) {
  let obj = {
    Rock: "Scissors",
    Scissors: "Paper",
    Paper: "Rock",
  };
  return p1 === p2
    ? "It's a draw."
    : obj[p1] === p2
    ? "The winner is p1"
    : "The winner is p2.";
}

console.log(rpsTwo("Rock", "Scissors"));

function rpsThree(p1, p2) {
  const wins = ["RockScissors", "PaperRock", "ScissorsPaper"];

  /*
  The code below first checks whether the first input, p1 is exactly equal to p2
  If the two are not equal, it prints from a string template, "The winner is "
  An ES6 else statement within the ES6 string statement checks whether the two strings concatenated together
  are found in the array "Wins" above.
  The array contains the results for this concatenation assuming that the winner is p1, therefore,
  if this returns true, the string ends in "p1", otherwise, the string will end with p2.
  */

  return p1 === p2
    ? "It's a draw"
    : `The winner is ${wins.includes(p1 + p2) ? "p1" : "p2"}`;
}

console.log(rpsThree("Scissors", "Paper"));

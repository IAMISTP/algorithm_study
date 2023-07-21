let fs = require("fs");
let input = fs.readFileSync("input.txt").toString();
input = Number(input);
if (input >= 90 && 101 > input) {
  console.log("A");
} else if (input >= 80 && 90 > input) {
  console.log("B");
} else if (input >= 70 && 80 > input) {
  console.log("C");
} else if (input >= 60 && 70 > input) {
  console.log("D");
} else {
  console.log("F");
}

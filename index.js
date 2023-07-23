let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");
let numbers = input[1].split("").map(Number);
console.log(numbers.reduce((a, b) => a + b, 0));

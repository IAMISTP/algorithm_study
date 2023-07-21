let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");
let cnt = Number(input[0]);
let numbers = input[1].split(" ").map(Number);
let min = numbers.reduce((a, b) => Math.min(a, b));
let max = numbers.reduce((a, b) => Math.max(a, b));
console.log(min, max);

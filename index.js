let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");
let cnt = Number(input[0]);
let numbers = input[1].split(" ").map(Number);
let total = numbers.reduce((a, b) => a + b, 0);
let max = Math.max(...numbers);
let result = ((total / max) * 100) / cnt;
console.log(result.toFixed(2));

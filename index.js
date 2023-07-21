let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n").map(Number);
console.log(input.reduce((a, b) => Math.max(a, b)));
console.log(input.indexOf(input.reduce((a, b) => Math.max(a, b))) + 1);

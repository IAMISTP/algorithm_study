let fs = require("fs");
let [a, b] = fs.readFileSync("input.txt").toString().split(" ").map(Number);
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);

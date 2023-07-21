let fs = require("fs");
let input = fs.readFileSync("input.txt").toString();
let result = 0;
for (let i = 1; i <= Number(input); i++) {
  result += i;
}
console.log(result);

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split(" ").map(Number);
function compare(a, b) {
  return a - b;
}
input.sort(compare);
for (let n of input) {
  console.log(n);
}

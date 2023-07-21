let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split(" ").map(Number);
let [h, m] = input;
if (m < 45) {
  m += 15;
  h -= 1;
  if (h < 0) {
    h = 23;
  }
} else {
  m -= 45;
}
console.log(h, m);

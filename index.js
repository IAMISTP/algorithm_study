let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");
let cnt = Number(input[0]);
let newArr = [];
for (let i = 1; i <= cnt; i++) {
  newArr.push(input[i]);
}
newArr = newArr.sort((a, b) => a - b);
for (let i = 0; i < newArr.length; i++) {
  console.log(newArr[i]);
}

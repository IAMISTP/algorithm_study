let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");
let result = input[0].trim().split(" ");
if (result == "") {
  console.log(0);
} else {
  console.log(result.length);
}

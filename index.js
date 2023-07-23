let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split(" ");

let a = Number(input[0].split("").reverse().join(""));
let b = Number(input[1].split("").reverse().join(""));
console.log(a > b ? a : b);

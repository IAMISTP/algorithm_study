let fs = require("fs");
let input = fs.readFileSync("input.txt").toString();
for (let i = 1; i < 10; i++) {
  console.log(`${parseInt(input)} * ${i} = ${parseInt(input) * i}`);
}

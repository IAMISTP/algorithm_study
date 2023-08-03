const fs = require('fs')
const input = fs.readFileSync('2444.txt').toString().trim();
function star(input){
let result = [];
for(let i=1;i<input;i++){
let side = " ".repeat(input-i);
let middle = '*'.repeat(i*2-1);
result.push(side + middle)
}
for(let i=input;i>=1;i--){
    let side = " ".repeat(input-i);
    let middel = "*".repeat(i*2-1);
    result.push(side+middel)
}
return result.join('\n')
   
}
console.log(star(input));
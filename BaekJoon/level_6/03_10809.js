const fs = require('fs');
const { Z_ASCII } = require('zlib');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const ansArr = [];

for (let i = 97; i <= 122; i++) {
  ansArr.push(input.indexOf(String.fromCharCode(i)));
}

console.log(ansArr.join(" "));
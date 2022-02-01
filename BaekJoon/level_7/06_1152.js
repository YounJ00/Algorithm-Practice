const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const words = input.split(' ');
let countWords = 0;

for (let i = 0; i < words.length; i++) {
  if (words[i] !== '') {
    countWords++;
  }
}

console.log(countWords);
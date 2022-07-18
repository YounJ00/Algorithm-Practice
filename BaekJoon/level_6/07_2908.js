const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

let A = [];
let B = [];

for (let i = 2; i >= 0; i--) {
    A += input[0].split('')[i];
    B += input[1].split('')[i];
}

if (Number(A) > Number(B)) {
    console.log(+A);
} else {
    console.log(+B);
}
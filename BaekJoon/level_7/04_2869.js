const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

solution(+input[0], +input[1], +input[2]);

function solution (A, B, V) {
    const res = Math.ceil((V - B) / (A - B));
    console.log(res);
}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [inputA, inputB] = input[0].split(' ').map((item) => +item);
const inputC = +input[1];

solution(inputA, inputB, inputC);

function solution(A, B, C) {
    B += C;
    if (B >= 60) {
        n = Math.floor(B / 60);
        A += n;
        B -= 60 * n;
    }

    if (A > 23) {
        A -= 24;
    }
    console.log(A, B);
}
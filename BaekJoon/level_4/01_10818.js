const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const n = +input[0];
const arrayN = input[1].split(' ').map((item) => +item);

solution(n, arrayN);

function solution (N, ArrayN) {
    let max = arrayN[0];
    let min = arrayN[0];
    for (let i = 0; i < N; i++) {
        if (max < ArrayN[i]) {
            max = ArrayN[i];
        }

        if (min > ArrayN[i]) {
            min = ArrayN[i];
        }
    }
    console.log(`${min} ${max}`);
}
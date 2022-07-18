const fs = require('fs');
const { join } = require('path/posix');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution (N) {
    let numArr = [];
    let ansArr = [];
    for (let i = 1; i <= N; i++) {
        numArr = String(i);
        if (numArr.length <= 2) {
            ansArr.push(i);
        } else {
            let A = Number(numArr[0]) - Number(numArr[1]);
            let B = Number(numArr[1]) - Number(numArr[2]);
            if (A === B) {
                ansArr.push(i);
            }
        }
    }
    console.log(ansArr.length);
}
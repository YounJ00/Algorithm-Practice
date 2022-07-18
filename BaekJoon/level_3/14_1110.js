const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution (N) {
    let sum = N;
    let cycle = 0;
    while (sum !== N || cycle === 0) {
        let ten;
        let one;
        if (sum >= 10) {
            ten = +String(sum)[0];
            one = +String(sum)[1];
        } else {
            ten = 0;
            one = +String(sum)[0];
        }
        sum = ten + one;

        let sumOne;
        if (sum >= 10) {
            sumOne = +String(sum)[1]
        } else {
            sumOne = +String(sum)[0];
        }
        sum = +(String(one) + String(sumOne));

        cycle++;
    }
    console.log(cycle);
}
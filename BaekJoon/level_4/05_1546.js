const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const grades = input[1].split(' ').map((item) => +item);

solution(+input[0], grades);

function solution (N, Grades) {
    let M = Grades[0];
    for (let i = 1; i < N; i++) {
        if (M < Grades[i]) {
            M = Grades[i];
        }
    }
    let sum = 0;
    for (let i = 0; i < N; i++) {
        sum += Grades[i] / M * 100
    }

    console.log(sum/N);
}
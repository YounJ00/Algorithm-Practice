const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testCaseA = [];
const testCaseB = [];
for (let i = 0; ; i++) {
    const tempValue = input[i].split(' ').map((item) => +item);
    testCaseA.push(tempValue[0]);
    testCaseB.push(tempValue[1]);
    if (tempValue[0] === 0 && tempValue[1] === 0) break;
}

solution(testCaseA, testCaseB);

function solution (testcaseA, testcaseB) {
    let A = testcaseA[0];
    let B = testcaseB[0];
    let idx = 1;
    while (A !== 0 || B !== 0) {
        console.log(A + B);
        A = testcaseA[idx];
        B = testcaseB[idx];        
        idx++;
    }
}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testcaseN = [];
for (let i = 1; i <= +input[0]; i++) {
    testcaseN[i-1] = input[i].split(' ').map((item) => +item);
}

solution(+input[0], testcaseN);

function solution (C, testCaseN) {
    let sum;
    let avg;
    
    for (let i = 0; i < C; i++) {
        let Count = 0;
        let testCaseArray = testCaseN[i];
        sum = 0;
        for (let j = 1; j <= testCaseArray[0]; j++) {
            sum += testCaseArray[j];
        }
        avg = sum / testCaseArray[0];

        for (let k = 1; k <= testCaseArray[0]; k++) {
            if (testCaseArray[k] > avg) {
                Count++;
            }
        }
        let res = (Count / testCaseArray[0] * 100).toFixed(3);
        console.log(res+'%');
    }
}
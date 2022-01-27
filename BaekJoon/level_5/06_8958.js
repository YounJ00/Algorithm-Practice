const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testCaseArray = [];
for (let i = 1; i <= +input[0]; i++) {
    testCaseArray[i-1] = input[i].split('');
}

solution(+input[0], testCaseArray);

function solution (N, testcaseArray) {
    for (let i = 0; i < N; i++) {
        let res = 0;
        let sum = 0;
        let arrayLength = testcaseArray[i].length;
        for (let j = 0; j < arrayLength; j++) {
            if (testcaseArray[i][j] === 'O') {
                res++;
            } else {
                res = 0;
            }
            sum += res;
        }       
        console.log(sum);        
    }
}
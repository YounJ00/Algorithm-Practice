const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map((item) => +item);

solution(input);

function solution (inputArray) {
    let max = inputArray[0];
    let ans = 0;
    for(let i = 1; i < inputArray.length; i++) {
        if(max < inputArray[i]) {
            max = inputArray[i];
            ans = i;
        }
    }
    console.log(max);
    console.log(ans+1);
}
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map((item) => +item);

solution(input[0], input[1], input[2]);

function solution (A, B, C) {
    const mul = A * B * C;
    const mulArray = String(mul).split('').map((item) => +item);

    for (let i = 0; i <= 9; i++) {
        let ans = 0;
        for (let k = 0; k < mulArray.length; k++){
            if (mulArray[k] === i) {
                ans++;
            }
        }   
        console.log(ans);
    }
}
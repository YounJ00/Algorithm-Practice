const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map((item) => +item);

solution(input);

function solution (inputArray) {
    const check = [];
    let num;

    for(let i=0; i<inputArray.length; i++){
        num = inputArray[i] % 42;
        if(check.indexOf(num) === -1) check.push(num);  // check배열에 num이 없을 경우 push
    }

    console.log(check.length);
}
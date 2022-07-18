const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const inputT = +input[0];
let testdataArr = [];
for (let i = 1; i <= inputT; i++) {
    let tempValue = input[i].split(' ').map((item) => +item);
    testdataArr.push({H : tempValue[0], W : tempValue[1], N : tempValue[2]});
}

solution (inputT, testdataArr);
function solution(T, testDataArr) {
    for (let i = 0; i < T; i++) {
        let H = testDataArr[i].H;
        let N = testDataArr[i].N;
        if (N % H === 0) {
            fl = H;
            ho = N / H;
        } else {
            fl = N % H;
            ho = Math.floor(N / H) + 1;
        }

        if (ho < 10) {ho = `0${ho}`;}
        console.log(`${fl}${ho}`);
    }
}
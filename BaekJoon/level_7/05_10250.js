const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let testcaseArr = [];
for (let i = 1; i <= +input[0]; i++) {
    let tempValue = input[i].split(' ').map((item)=>+item);
    testcaseArr.push({H : tempValue[0], W : tempValue[1], N : tempValue[2]});
}

solution (+input[0], testcaseArr);
function solution (T, testCaseArr) {
    for (let i = 0; i < T; i++) {
        let H = testCaseArr[i].H;
        let N = testCaseArr[i].N;
        let floor = N - H;
        let Count = 0;
        while (N >= 0) {
            N = N - H;
            Count++;
        }
        if (Count < 10) {
            Count = 0+String(Count);
        }
        console.log(String(N+H)+String(Count));
    }
}

/*
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const T = +(input.shift());

for (let i = 0; i < T; i++) {
    const HWN = input[i].split(' ');
    let H = +(HWN.shift());
    HWN.shift();
    let N = +(HWN.shift());
    let roomCnt = 1;

    while (N > H) {
        roomCnt++;
        N -= H;
    }
    if (roomCnt < 10) {
        console.log(`${N}0${roomCnt}`);
    } else {
        console.log(`${N}${roomCnt}`);
    }
}
*/
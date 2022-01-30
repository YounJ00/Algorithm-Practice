const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const T = +input[0];
let ansArr = [];
for (let i = 1; i <= T; i++) {
    let tempValute = input[i].split(' ');
    let R = tempValute[0];
    let S = tempValute[1];
    for (let j = 0; j < S.length; j++) {
        for (let k = 0; k < R; k++) {
            ansArr += S[j];
        }
    }
   ansArr += '\n';
}
console.log(ansArr);
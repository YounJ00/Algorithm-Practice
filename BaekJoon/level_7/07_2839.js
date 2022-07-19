const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString();

const N = +input;
let res = -1;

let five = Math.floor(N / 5);
while (five >= 0) {
    const remain = N - five * 5;

    if (remain % 3 === 0) {
        res = remain / 3 + five;
        break;
    } else {
        five -= 1;
    }
}
console.log(res);
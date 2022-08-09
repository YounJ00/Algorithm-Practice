const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const N = +input[0];
const arrN = input[1].split(' ').map((item) => +item);
let res = 0;

function primeNumber(n) {
    if (n < 2) {
        return;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return;
        }
    }
    res++;
}

for (let i = 0; i < N; i++) {
    primeNumber(arrN[i]);
}

console.log(res);
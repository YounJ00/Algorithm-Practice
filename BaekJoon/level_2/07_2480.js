const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ').map((item) => +item);

solution (input[0], input[1], input[2]);

function solution(n1, n2, n3) {
    let res = 0;
    if ((n1 === n2) && (n1 === n3) && (n2 === n3)) {
        res = 10000 + (n1 * 1000);
    }
    
    if ((n1 !== n2) || (n1 !==n2) || (n2 !== n3)) {
        if ((n1 == n2) || (n1 == n3)) {
            res = 1000 + (n1 * 100);
        }
        if (n2 == n3) {
            res = 1000 + (n2 * 100);
        }
    }

    if ((n1 !== n2) && (n1 !== n3) && (n2 !== n3)) {
        res = Math.max(n1, n2, n3) * 100;
    }

    console.log(res);
}
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    input = input.map((item) => Number(item));
    solution(input[0], input[1]);
    process.exit();
});

function solution(x, y) {
    let res = 0;
    if (x > 0 && y > 0) {
        res = 1;
    }
    if (x < 0 && y > 0) {
        res = 2;
    }
    if (x < 0 && y < 0) {
        res = 3;
    }
    if (x > 0 && y <0) {
        res = 4;
    }
    console.log(res);
}
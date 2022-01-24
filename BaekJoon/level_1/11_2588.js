const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((item) => Number(item));

solution(input[0], input[1]);

function solution (A, B) {
    const stringB = String(B);
    // 숫자 B를 문자열로 바꿔줌으로써 '3', '8', '5' 각각의 문자가 배열에 저장됨.
    // 385 -> ['3', '8', '5'] 
    const one = +stringB[2];
    const ten = +stringB[1];
    const hun = +stringB[0];

    console.log(A * one);
    console.log(A * ten);
    console.log(A * hun);
    console.log(A * B);
}
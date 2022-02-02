const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const Croatia = {
    0: 'c=',
    1: 'c-',
    2: 'dz=',
    3: 'd-',
    4: 'lj',
    5: 'nj',
    6: 's=',
    7: 'z=',
}

let ans = 0; //크로아티아 알파벳 개수를 셀 변수
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < input.length; j++){
        if (input.includes(Croatia[i])) {
            ans++;
            input = input.replace(Croatia[i]," "); //input에 크로아티아 알파벳이 있다면 공백으로 처리
        }
    }
}
//크로아티아 알파벳의 개수와 input에서 크로아티아 알파벳을 뺀 배열의 개수(그냥 알파벳의 개수)를 더해서 출력해줌
console.log(ans + input.replace(/(\s*)/g, "").length);
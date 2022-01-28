let arr = []; //생성자가 있는 수를 저장할 배열
let ans = []; //생성자가 없는 셀프넘버를 저장할 배열

for (let i = 1; i <= 10000; i++) {
    let sum = 0;
    let stringNum = String(i);
    for (let j = 0; j < stringNum.length; j++) {
        sum += Number(stringNum[j]);
    }
    let sumNum = i + sum;
    arr.push(sumNum);
}

for (let i = 1; i <= 10000; i++) {
    if(arr.indexOf(i) === -1) {
        ans += i + '\n';
    }
}

console.log(ans);
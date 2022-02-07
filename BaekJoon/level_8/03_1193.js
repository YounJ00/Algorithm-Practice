const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

solution(+input);

function solution (X) {
    groupCounter = 0;

    const Ascending = [];
    const Descending = [];
    
    while(X > 0){
      groupCounter ++; 
      X = X - groupCounter;
    }
    
    for(let i=0; i < groupCounter; i++){
        Ascending.push(i+1);
        Descending.push(groupCounter-i);
    }
    
    if(groupCounter % 2 === 0){
      console.log(`${Ascending[X+groupCounter-1]}/${Descending[X+groupCounter-1]}`)
    } else {
      console.log(`${Descending[X+groupCounter-1]}/${Ascending[X+groupCounter-1]}`)
    }
}

/* 다른풀이
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

solution(+input);

function solution (X) {
    let value = 1;
    while (true) {
        X -= value;
        if (X <= 0) {
            X += value;
            break;
        }
        value++;
    }
    
    if (value % 2 === 1) {
        console.log(`${value - (X - 1)}/${1 + (X - 1)}`);
    } else {
        console.log(`${1 + (X - 1)}/${value - (X - 1)}`);
    }
}
*/
const fs = require('fs');
const filePath =  process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const solution = s => {
  const word = s.toLowerCase(); //대소문자 구분하지 않으므로 소문자로 통일
 
  const result = new Array(26).fill(0); //알파벳 개수만큼 배열선언 후 0(단어개수 카운트)으로 채운다 

  //ASCII 'a' = 97
  for (let i = 0; i < word.length; i++) { //입력받은 단어수 만큼 루프를 돌면서 알파벳에 해당하는 인덱스를 1씩 늘려줌
    result[word.charCodeAt(i) - 97]++;
  }

  const maxCount = Math.max(...result); //result 배열의 가장 큰 요소 찾기
  const maxIndex = result.indexOf(maxCount); // 가장 큰 요소의 인덱스

  if (maxIndex === result.lastIndexOf(maxCount)) { //큰 수의 인덱스와(일치하는 첫인덱스) 일치하는 마지막 인덱스가 같으면 => 최대 알파벳이 하나라는 소리
    console.log(String.fromCharCode(maxIndex + 65)); //그 알파벳을 대문자로 출력
  } else {
    console.log('?'); // 아니면 2개 이상이라는 말이므로 ? 출력
  }
};

solution(input);
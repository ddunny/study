/**
 * 가장 큰 수
 * https://programmers.co.kr/learn/courses/30/lessons/42746
 *
 * 
 @ddunny
 */
function solution(numbers) {
  let answer = '';
  let temp = numbers.slice(0);
  temp.sort((a, b) => {
    const charA = a.toString();
    const charB = b.toString();
    return parseInt(charB + charA) - parseInt(charA + charB);
  }); // 첫번째 자리 기준으로 정렬

  if (temp[0] === 0) {
    return "0";
  }

  answer = temp.join(""); // 정답이 너무 클 수 있으니 문자열로 바꾸어 return
  return answer;
}

/**
 * 다른 사람의 풀이
 * function solution(numbers) {
 *   let temp = numbers.map(v => v + "")
 *     .sort((a, b) => parseInt(b + a) - parseInt(a + b))
 *     .join("");
 * 
 *   return (temp[0] === "0") ? "0" : temp;
}
 */
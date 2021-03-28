/** 
 * 이상한 문자 만들기
 * https://programmers.co.kr/learn/courses/30/lessons/12930
 * - 
 * 
 * @ddunny
*/

function solution(s) {
  var answer = "";
  let start_letter = 1;
  const new_s = s
    .split("")
    .reduce((acc, value, index) => {
      if (value === " ") {
        start_letter = 1;
        acc.push(" ");
        return acc;
      }

      start_letter % 2 === 0
        ? acc.push(value.toLowerCase())
        : acc.push(value.toUpperCase());
      start_letter++;

      return acc;
    }, [])
    .join("");

  answer = new_s;

  return answer;
}

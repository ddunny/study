/** 
 * 문자열 내림차순으로 배치하기
 * https://programmers.co.kr/learn/courses/30/lessons/12917
 * - 
 * 
 * @ddunny
*/

function solution(s) {
  var answer = "";

  answer = s
    .split("")
    .sort((a, b) => (a > b ? -1 : 1))
    .join("");
  return answer;
}

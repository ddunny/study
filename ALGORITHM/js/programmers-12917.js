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
    .sort((a, b) => {
      if (a.charCodeAt(0) === b.charCodeAt(0)) return 0;
      return a.charCodeAt(0) < b.charCodeAt(0) ? 1 : -1;
    })
    .join("");
  return answer;
}

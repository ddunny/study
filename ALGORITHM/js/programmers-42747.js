/**
 * H-Index
 * https://programmers.co.kr/learn/courses/30/lessons/42747
 *
 * 
 @ddunny
 */
function solution(citations) {
  let answer = citations
    .sort((a, b) => b - a)
    .filter((element, index) => index + 1 === element);

  return answer[0] * 1;
}
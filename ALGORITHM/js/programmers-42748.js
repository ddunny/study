/**
 * K번째수
 * https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript
 *
 * 
 @ddunny
 */
function solution(array, commands) {
  let answer = [];
  for (let idx in commands) {
    answer[idx] = array
                  .filter((v, x) => commands[idx][0] <= x + 1 && x + 1 <= commands[idx][1])
                  .sort((a, b) => a - b)
                  .filter((v, x) => commands[idx][2] === x + 1)
                  .join("") * 1;
  }

  return answer;
}
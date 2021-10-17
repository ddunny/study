/** 
 * 5주차_모음사전
도움말
 * https://programmers.co.kr/learn/courses/30/lessons/84512
 * 괜찮은 풀이: https://tiktaek.tistory.com/m/75
 * 
 * @ddunny
*/
function solution(word) {
  let answer = 0;

  const len = word.length;
  const ch = ['A', 'E', 'I', 'O', 'U'];
  const prevCase = [0, 1, 2, 3, 4]; //ch의 각 인덱스에 존재하는 알파벳보다 앞선 경우
  const diff = [781, 156, 31, 6, 1]; // 각 자리수가 바뀌기 위해 넘겨야 하는 케이스의 총 개수

  for (let i = 0; i < len; i++) {
    let prevCaseIndex = ch.findIndex((v) => v === word[i]);
    answer += prevCase[prevCaseIndex] * diff[i] + 1; // + 1 : 현재 위치한 단어의 개수
  }

  return answer;
}

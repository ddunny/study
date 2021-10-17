/**
 * 5주차_모음사전
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

/**
테스트 1 〉	통과 (0.11ms, 30.3MB)
테스트 2 〉	통과 (0.11ms, 30.3MB)
테스트 3 〉	통과 (0.12ms, 30.2MB)
테스트 4 〉	통과 (0.08ms, 30.3MB)
테스트 5 〉	통과 (0.10ms, 30.3MB)
테스트 6 〉	통과 (0.11ms, 30.4MB)
테스트 7 〉	통과 (0.08ms, 30.4MB)
테스트 8 〉	통과 (0.11ms, 30.2MB)
테스트 9 〉	통과 (0.10ms, 30.4MB)
테스트 10 〉	통과 (0.08ms, 30.2MB)
테스트 11 〉	통과 (0.15ms, 30.3MB)
테스트 12 〉	통과 (0.14ms, 30.2MB)
테스트 13 〉	통과 (0.10ms, 30.3MB)
테스트 14 〉	통과 (0.10ms, 30.2MB)
테스트 15 〉	통과 (0.08ms, 30.2MB)
테스트 16 〉	통과 (0.10ms, 30.1MB)
테스트 17 〉	통과 (0.11ms, 30.1MB)
테스트 18 〉	통과 (0.08ms, 30.4MB)
테스트 19 〉	통과 (0.11ms, 30.3MB)
테스트 20 〉	통과 (0.11ms, 30.4MB)
테스트 21 〉	통과 (0.08ms, 30.4MB)
테스트 22 〉	통과 (0.12ms, 30.2MB)
테스트 23 〉	통과 (0.10ms, 30.3MB)
테스트 24 〉	통과 (0.11ms, 30.2MB)
테스트 25 〉	통과 (0.10ms, 30.3MB)
테스트 26 〉	통과 (0.11ms, 30.2MB)
테스트 27 〉	통과 (0.09ms, 30.2MB)
테스트 28 〉	통과 (0.12ms, 30.3MB)
테스트 29 〉	통과 (0.10ms, 30.3MB)
테스트 30 〉	통과 (0.09ms, 30.2MB)
테스트 31 〉	통과 (0.08ms, 30.2MB)
테스트 32 〉	통과 (0.11ms, 29.8MB)
테스트 33 〉	통과 (0.07ms, 30MB)
테스트 34 〉	통과 (0.11ms, 30.3MB)
테스트 35 〉	통과 (0.08ms, 30.2MB)
테스트 36 〉	통과 (0.11ms, 30.2MB)
테스트 37 〉	통과 (0.10ms, 30.2MB)
테스트 38 〉	통과 (0.09ms, 30.3MB)
테스트 39 〉	통과 (0.14ms, 30.4MB)
테스트 40 〉	통과 (0.08ms, 30.4MB)
 */

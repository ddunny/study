// 내적
// https://programmers.co.kr/learn/courses/30/lessons/70128

function solution(a, b) {
  let answer = 0;
  a.map((v, i) => {
    answer += v * b[i];
  });

  return answer;
}

/**
테스트 1 〉	통과 (0.17ms, 29.9MB)
테스트 2 〉	통과 (0.07ms, 30MB)
테스트 3 〉	통과 (0.08ms, 30.1MB)
테스트 4 〉	통과 (0.05ms, 30.2MB)
테스트 5 〉	통과 (0.07ms, 30.1MB)
테스트 6 〉	통과 (0.12ms, 30.3MB)
테스트 7 〉	통과 (0.08ms, 30MB)
테스트 8 〉	통과 (0.15ms, 30.1MB)
테스트 9 〉	통과 (0.15ms, 30MB)
 */

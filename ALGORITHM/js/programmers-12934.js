// 정수 제곱근 판별
// https://programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
  let answer = Math.sqrt(n);
  return answer === Math.floor(answer) ? Math.pow(answer + 1, 2) : -1;
}

/**
테스트 1 〉	통과 (0.04ms, 30.1MB)
테스트 2 〉	통과 (0.05ms, 30MB)
테스트 3 〉	통과 (0.05ms, 30MB)
테스트 4 〉	통과 (0.05ms, 30MB)
테스트 5 〉	통과 (0.05ms, 30.1MB)
테스트 6 〉	통과 (0.04ms, 30.1MB)
테스트 7 〉	통과 (0.05ms, 30MB)
테스트 8 〉	통과 (0.05ms, 30.2MB)
테스트 9 〉	통과 (0.05ms, 30.1MB)
테스트 10 〉	통과 (0.05ms, 30MB)
테스트 11 〉	통과 (0.06ms, 29.9MB)
테스트 12 〉	통과 (0.05ms, 30.1MB)
테스트 13 〉	통과 (0.04ms, 30.2MB)
테스트 14 〉	통과 (0.03ms, 30.1MB)
테스트 15 〉	통과 (0.05ms, 29.8MB)
테스트 16 〉	통과 (0.05ms, 30MB)
테스트 17 〉	통과 (0.04ms, 30.1MB)
테스트 18 〉	통과 (0.05ms, 30.3MB)
 */

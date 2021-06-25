// 3진법 뒤집기
// https://programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
  return parseInt([...n.toString(3)].reverse().join(''), 3);
}

/**
테스트 1 〉	통과 (0.05ms, 29.9MB)
테스트 2 〉	통과 (0.06ms, 29.9MB)
테스트 3 〉	통과 (0.05ms, 29.9MB)
테스트 4 〉	통과 (0.05ms, 30MB)
테스트 5 〉	통과 (0.03ms, 30.1MB)
테스트 6 〉	통과 (0.05ms, 29.8MB)
테스트 7 〉	통과 (0.05ms, 30.2MB)
테스트 8 〉	통과 (0.05ms, 29.9MB)
테스트 9 〉	통과 (0.04ms, 29.9MB)
테스트 10 〉	통과 (0.04ms, 30.1MB)
 */

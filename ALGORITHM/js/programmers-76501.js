// 음양 더하기
// https://programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
  return absolutes.reduce((acc, v, i) => {
    acc += signs[i] ? v : v * -1;
    return acc;
  }, 0);
}

/**
테스트 1 〉	통과 (0.15ms, 30.4MB)
테스트 2 〉	통과 (0.17ms, 30.1MB)
테스트 3 〉	통과 (0.10ms, 30.2MB)
테스트 4 〉	통과 (0.15ms, 29.8MB)
테스트 5 〉	통과 (0.18ms, 30.1MB)
테스트 6 〉	통과 (0.09ms, 30.1MB)
테스트 7 〉	통과 (0.16ms, 30.4MB)
테스트 8 〉	통과 (0.16ms, 30.1MB)
테스트 9 〉	통과 (0.20ms, 30.1MB)
 */

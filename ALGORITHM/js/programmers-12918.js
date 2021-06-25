// 문자열 다루기 기본
// https://programmers.co.kr/learn/courses/30/lessons/12918
// https://regexr.com/

function solution(s) {
  const pattern = /^([\d]{4}|[\d]{6})$/g;
  return pattern.test(s);
}

/*
테스트 1 〉	통과 (0.11ms, 30.2MB)
테스트 2 〉	통과 (0.20ms, 29.9MB)
테스트 3 〉	통과 (0.11ms, 30MB)
테스트 4 〉	통과 (0.11ms, 29.9MB)
테스트 5 〉	통과 (0.12ms, 30.1MB)
테스트 6 〉	통과 (0.13ms, 29.9MB)
테스트 7 〉	통과 (0.19ms, 30.1MB)
테스트 8 〉	통과 (0.16ms, 30.2MB)
테스트 9 〉	통과 (0.19ms, 30MB)
테스트 10 〉	통과 (0.11ms, 30.2MB)
테스트 11 〉	통과 (0.19ms, 30.1MB)
테스트 12 〉	통과 (0.11ms, 30.3MB)
테스트 13 〉	통과 (0.11ms, 30.1MB)
테스트 14 〉	통과 (0.13ms, 30.1MB)
테스트 15 〉	통과 (0.12ms, 30.2MB)
테스트 16 〉	통과 (0.13ms, 29.8MB)
*/

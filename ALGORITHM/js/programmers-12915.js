// 문자열 내 마음대로 정렬하기
// https://programmers.co.kr/learn/courses/30/lessons/12915

function solution(strings, n) {
  var answer = [];
  answer = strings.sort((a, b) => {
    if (a.charAt(n) === b.charAt(n)) {
      if (a < b) {
        return -1;
      } else {
        return 1;
      }
    }
    if (a.charAt(n) < b.charAt(n)) {
      return -1;
    } else {
      return 1;
    }
  });
  return answer;
}

/**
테스트 1 〉	통과 (0.08ms, 30.5MB)
테스트 2 〉	통과 (0.09ms, 30.1MB)
테스트 3 〉	통과 (0.08ms, 29.9MB)
테스트 4 〉	통과 (0.11ms, 30.1MB)
테스트 5 〉	통과 (0.09ms, 30.2MB)
테스트 6 〉	통과 (0.13ms, 29.9MB)
테스트 7 〉	통과 (0.10ms, 30MB)
테스트 8 〉	통과 (0.07ms, 30.3MB)
테스트 9 〉	통과 (0.10ms, 29.8MB)
테스트 10 〉	통과 (0.14ms, 30.3MB)
테스트 11 〉	통과 (0.09ms, 30MB)
테스트 12 〉	통과 (0.18ms, 30MB)
 */

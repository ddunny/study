// 핸드폰 번호 가리기
// https://programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number) {
  return phone_number.slice(-4).padStart(phone_number.length, '*');
}

/**
테스트 1 〉	통과 (0.04ms, 30.3MB)
테스트 2 〉	통과 (0.42ms, 30MB)
테스트 3 〉	통과 (0.04ms, 30.1MB)
테스트 4 〉	통과 (0.04ms, 29.8MB)
테스트 5 〉	통과 (0.04ms, 30.2MB)
테스트 6 〉	통과 (0.05ms, 30.2MB)
테스트 7 〉	통과 (0.04ms, 30MB)
테스트 8 〉	통과 (0.05ms, 30.1MB)
테스트 9 〉	통과 (0.04ms, 30.3MB)
테스트 10 〉	통과 (0.04ms, 30.1MB)
테스트 11 〉	통과 (0.04ms, 30MB)
테스트 12 〉	통과 (0.04ms, 30.2MB)
테스트 13 〉	통과 (0.03ms, 30.1MB)
 */

// 가운데 글자 가져오기
// https://programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
  let answer = '';
  const portion = Math.floor(s.length / 2);
  const rest = s.length % 2;

  answer =
    rest !== 0 ? s.charAt(portion) : s.charAt(portion - 1) + s.charAt(portion);
  return answer;
}

/**
테스트 1 〉	통과 (0.06ms, 29.9MB)
테스트 2 〉	통과 (0.06ms, 30.1MB)
테스트 3 〉	통과 (0.04ms, 29.9MB)
테스트 4 〉	통과 (0.06ms, 30.2MB)
테스트 5 〉	통과 (0.06ms, 30.1MB)
테스트 6 〉	통과 (0.06ms, 30.1MB)
테스트 7 〉	통과 (0.07ms, 30.2MB)
테스트 8 〉	통과 (0.06ms, 30MB)
테스트 9 〉	통과 (0.06ms, 30MB)
테스트 10 〉	통과 (0.06ms, 30.1MB)
테스트 11 〉	통과 (0.06ms, 30.3MB)
테스트 12 〉	통과 (0.06ms, 30.2MB)
테스트 13 〉	통과 (0.06ms, 30MB)
테스트 14 〉	통과 (0.05ms, 30.1MB)
테스트 15 〉	통과 (0.06ms, 30.2MB)
테스트 16 〉	통과 (0.07ms, 30MB)
 */

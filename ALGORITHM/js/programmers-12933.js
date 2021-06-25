// 정수 내림차순으로 배치하기
// https://programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
  const answer =
    String(n)
      .split('')
      .sort((a, b) => b - a)
      .join('') * 1;
  return answer;
}

/*
테스트 1 〉	통과 (0.05ms, 29.9MB)
테스트 2 〉	통과 (0.08ms, 29.9MB)
테스트 3 〉	통과 (0.07ms, 30.1MB)
테스트 4 〉	통과 (0.08ms, 30MB)
테스트 5 〉	통과 (0.07ms, 29.8MB)
테스트 6 〉	통과 (0.07ms, 30.1MB)
테스트 7 〉	통과 (0.06ms, 29.8MB)
테스트 8 〉	통과 (0.07ms, 30.1MB)
테스트 9 〉	통과 (0.05ms, 30.1MB)
테스트 10 〉	통과 (0.07ms, 30MB)
테스트 11 〉	통과 (0.07ms, 30.2MB)
테스트 12 〉	통과 (0.07ms, 30MB)
테스트 13 〉	통과 (0.07ms, 29.9MB)
테스트 14 〉	통과 (0.07ms, 29.9MB)
테스트 15 〉	통과 (0.06ms, 30MB)
테스트 16 〉	통과 (0.08ms, 29.8MB)
*/

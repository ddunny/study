// 가장 큰 수
// https://programmers.co.kr/learn/courses/30/lessons/42746

function solution(numbers) {
  const answer = numbers
    .map((v) => v + '')
    .sort((a, b) => (b + a) * 1 - (a + b) * 1)
    .join('');

  // answer[0] === '0': 00000 인 경우 처리를 위해
  return answer[0] === '0' ? '0' : answer;
}

/**
테스트 1 〉	통과 (109.75ms, 39.4MB)
테스트 2 〉	통과 (64.52ms, 36.9MB)
테스트 3 〉	통과 (146.28ms, 45.9MB)
테스트 4 〉	통과 (4.45ms, 32.3MB)
테스트 5 〉	통과 (129.35ms, 37.9MB)
테스트 6 〉	통과 (92.01ms, 38.4MB)
테스트 7 〉	통과 (0.10ms, 30.1MB)
테스트 8 〉	통과 (0.07ms, 30MB)
테스트 9 〉	통과 (0.10ms, 30.2MB)
테스트 10 〉	통과 (0.06ms, 30MB)
테스트 11 〉	통과 (0.09ms, 30MB)
 */

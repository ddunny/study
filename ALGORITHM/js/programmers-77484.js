// 로또의 최고 순위와 최저 순위
// https://programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];
  const minCount = lottos.filter((v) => win_nums.includes(v)).length;
  const zeroCount = lottos.filter((v) => !v).length;
  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}

/**
테스트 1 〉	통과 (0.09ms, 30MB)
테스트 2 〉	통과 (0.09ms, 30.1MB)
테스트 3 〉	통과 (0.09ms, 30MB)
테스트 4 〉	통과 (0.06ms, 30.1MB)
테스트 5 〉	통과 (0.06ms, 30.1MB)
테스트 6 〉	통과 (0.09ms, 29.9MB)
테스트 7 〉	통과 (0.09ms, 29.4MB)
테스트 8 〉	통과 (0.09ms, 30MB)
테스트 9 〉	통과 (0.09ms, 30MB)
테스트 10 〉	통과 (0.11ms, 29.4MB)
테스트 11 〉	통과 (0.08ms, 29.9MB)
테스트 12 〉	통과 (0.09ms, 29.8MB)
테스트 13 〉	통과 (0.12ms, 30MB)
테스트 14 〉	통과 (0.11ms, 29.6MB)
테스트 15 〉	통과 (0.08ms, 30MB)
 */

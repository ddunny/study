// 튜플
// https://programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
  let answer = s
    .slice(2, -2)
    .split('},{')
    .map((v) => v.split(','))
    .sort((a, b) => a.length - b.length)
    .reduce((acc, value, index) => {
      if (index === 0) {
        acc = value;
        return acc;
      }
      acc = [...new Set([...acc, ...value])];
      return acc;
    }, [])
    .map((v) => Number(v));

  return answer;
}

/**
테스트 1 〉	통과 (0.10ms, 30.1MB)
테스트 2 〉	통과 (0.14ms, 30.2MB)
테스트 3 〉	통과 (0.12ms, 29.9MB)
테스트 4 〉	통과 (0.19ms, 29.9MB)
테스트 5 〉	통과 (0.45ms, 30.1MB)
테스트 6 〉	통과 (0.73ms, 30.2MB)
테스트 7 〉	통과 (9.10ms, 35.6MB)
테스트 8 〉	통과 (19.48ms, 41MB)
테스트 9 〉	통과 (10.72ms, 35.9MB)
테스트 10 〉	통과 (21.75ms, 41.1MB)
테스트 11 〉	통과 (35.05ms, 42.2MB)
테스트 12 〉	통과 (40.67ms, 45MB)
테스트 13 〉	통과 (37.25ms, 44.9MB)
테스트 14 〉	통과 (45.77ms, 45.6MB)
테스트 15 〉	통과 (0.12ms, 29.9MB)
 */

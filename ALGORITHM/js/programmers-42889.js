// 실패율
// https://programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
  let answer = [];
  let restUser = stages.length;
  for (let i = 1; i <= N; i++) {
    stages = stages.filter((v) => v !== i);
    let success = restUser - stages.length;
    answer.push({ index: i, percent: success / restUser });
    restUser = restUser - success;
  }

  return answer
    .sort((a, b) => (a.percent > b.percent ? -1 : 1))
    .map((v) => v.index);
}

/**
테스트 1 〉	통과 (0.20ms, 30.1MB)
테스트 2 〉	통과 (0.62ms, 30.2MB)
테스트 3 〉	통과 (61.22ms, 38.3MB)
테스트 4 〉	통과 (431.62ms, 68.6MB)
테스트 5 〉	통과 (1952.68ms, 75.1MB)
테스트 6 〉	통과 (1.30ms, 30.2MB)
테스트 7 〉	통과 (12.88ms, 34.2MB)
테스트 8 〉	통과 (465.86ms, 68.7MB)
테스트 9 〉	통과 (1916.99ms, 71.9MB)
테스트 10 〉	통과 (183.90ms, 57.3MB)
테스트 11 〉	통과 (453.03ms, 64MB)
테스트 12 〉	통과 (201.10ms, 63.6MB)
테스트 13 〉	통과 (956.80ms, 69.6MB)
테스트 14 〉	통과 (0.32ms, 30MB)
테스트 15 〉	통과 (34.90ms, 43.5MB)
테스트 16 〉	통과 (3.69ms, 32.9MB)
테스트 17 〉	통과 (34.76ms, 43.5MB)
테스트 18 〉	통과 (5.36ms, 32.8MB)
테스트 19 〉	통과 (1.04ms, 30.4MB)
테스트 20 〉	통과 (5.29ms, 33.7MB)
테스트 21 〉	통과 (8.11ms, 36.4MB)
테스트 22 〉	통과 (4019.17ms, 68MB)
테스트 23 〉	통과 (21.95ms, 43.6MB)
테스트 24 〉	통과 (84.82ms, 54.4MB)
테스트 25 〉	통과 (0.20ms, 30.1MB)
테스트 26 〉	통과 (0.15ms, 30MB)
테스트 27 〉	통과 (0.14ms, 30MB)
 */

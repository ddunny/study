// 순위
// https://programmers.co.kr/learn/courses/30/lessons/49191

function solution(n, results) {
  let answer = 0;

  // 초기화
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(false));

  // 승리한 것은 승리한 것으로 넣기
  results.forEach((v) => {
    graph[v[0]][v[1]] = true;
  });

  // 비교하기
  for (let k = 1; k <= n; k++) {
    // A와 B를 거치는 선수
    for (let i = 1; i <= n; i++) {
      // A 선수
      for (let j = 1; j <= n; j++) {
        // B 선수
        if (graph[i][k] && graph[k][j]) {
          // ex. 1과 2가 대결하진 않았지만, 1이 5를 이겼고, 5가 2를 이겼다면, 1은 2를 이긴게 된다.
          graph[i][j] = true;
        }
      }
    }
  }

  // 승패 계산하기
  for (let i = 1; i <= n; i++) {
    let count = 0;
    for (let j = 1; j <= n; j++) {
      if (graph[i][j] || graph[j][i]) {
        // 누구 하나가 이긴 것이라면, 승패가 결정된 것으로 순위를 알 수 있는 것이다.
        count++;
      }
    }

    if (count === n - 1) {
      // 본인을 제외한 모든 선수들의 승패가 결정되었다면 본인 순위를 알 수 있다.
      answer++;
    }
  }

  return answer;
}

/**
테스트 1 〉	통과 (0.17ms, 30.1MB)
테스트 2 〉	통과 (0.16ms, 30.4MB)
테스트 3 〉	통과 (0.23ms, 30.2MB)
테스트 4 〉	통과 (0.44ms, 30.2MB)
테스트 5 〉	통과 (3.60ms, 33.1MB)
테스트 6 〉	통과 (3.86ms, 33MB)
테스트 7 〉	통과 (6.82ms, 33.3MB)
테스트 8 〉	통과 (8.67ms, 33.5MB)
테스트 9 〉	통과 (10.19ms, 33.5MB)
테스트 10 〉	통과 (10.17ms, 33.6MB)
*/

// 여행 경로
// https://programmers.co.kr/learn/courses/30/lessons/77885

function solution(tickets) {
  let answer = [];
  let movePath = [];
  let visited = new Array(tickets.length).fill(false);

  let line = [];

  for (let i = 0; i < tickets.length; i++) {
    let searchNextDest = (idx, prev) => {
      for (let j = 0; j < tickets.length; j++) {
        // 방문한 적이 없고, 이전 도착지가 출발지인 경우, 이제 곧 갈 장소다.
        if (!visited[j] && tickets[j][0] === prev[1]) {
          visited[j] = true;
          line.push(tickets[j][1]);
          if (line.length === tickets.length + 1) {
            movePath.push([...line]);
          }
          searchNextDest(j, tickets[j]);
          visited[j] = false;
          line.pop();
        }
      }
    };

    // 시작은 무조건 인천부터
    if (tickets[i][0] === 'ICN') {
      visited[i] = true;
      line.push(tickets[i][0], tickets[i][1]);
      searchNextDest(i, tickets[i]);
      visited[i] = false;
      line.pop();
      line.pop();
    }
  }

  answer = movePath.filter((v) => v.length > 0).sort();

  return answer[0];
}

/**
테스트 1 〉	통과 (262.50ms, 51.4MB)
테스트 2 〉	통과 (0.23ms, 30.4MB)
테스트 3 〉	통과 (0.16ms, 30.3MB)
테스트 4 〉	통과 (0.14ms, 30.4MB)
 */

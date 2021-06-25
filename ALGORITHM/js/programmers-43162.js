// 네트워크
// https://programmers.co.kr/learn/courses/30/lessons/43162

function solution(n, computers) {
  let count = 0;
  let visitArr = new Array(n).fill(false);

  for (let i in computers) {
    count += dfs(i);
  }

  function dfs(i) {
    if (visitArr[i] == true) return 0;
    else visitArr[i] = true;

    for (let j in computers[i]) {
      if (computers[i][j] == 1) dfs(j);
    }

    return 1;
  }

  return count;
}

/**
테스트 1 〉	통과 (0.12ms, 30.2MB)
테스트 2 〉	통과 (0.09ms, 30.4MB)
테스트 3 〉	통과 (0.17ms, 30.1MB)
테스트 4 〉	통과 (0.18ms, 30.3MB)
테스트 5 〉	통과 (0.10ms, 30MB)
테스트 6 〉	통과 (0.48ms, 30.1MB)
테스트 7 〉	통과 (0.14ms, 30MB)
테스트 8 〉	통과 (0.36ms, 30.1MB)
테스트 9 〉	통과 (0.28ms, 30.3MB)
테스트 10 〉	통과 (0.27ms, 30.5MB)
테스트 11 〉	통과 (1.64ms, 32.7MB)
테스트 12 〉	통과 (0.82ms, 30.5MB)
테스트 13 〉	통과 (0.63ms, 30.1MB)
*/

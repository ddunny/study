// 프린터
// https://programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
  const list = priorities.map((t, i) => ({
    my: i === location,
    val: t,
  }));

  let count = 0;
  while (1) {
    const cur = list.shift();
    if (list.some((t) => t.val > cur.val)) {
      list.push(cur);
      continue;
    }
    count++;
    if (cur.my) return count;
  }
}

/**
  테스트 1 〉	통과 (0.51ms, 30.2MB)
  테스트 2 〉	통과 (0.57ms, 30MB)
  테스트 3 〉	통과 (0.24ms, 30.2MB)
  테스트 4 〉	통과 (0.22ms, 30.3MB)
  테스트 5 〉	통과 (0.13ms, 30MB)
  테스트 6 〉	통과 (0.24ms, 30MB)
  테스트 7 〉	통과 (0.27ms, 30.3MB)
  테스트 8 〉	통과 (0.61ms, 30MB)
  테스트 9 〉	통과 (0.25ms, 29.9MB)
  테스트 10 〉	통과 (0.31ms, 30.1MB)
  테스트 11 〉	통과 (0.51ms, 30.2MB)
  테스트 12 〉	통과 (0.19ms, 30.2MB)
  테스트 13 〉	통과 (0.52ms, 30MB)
  테스트 14 〉	통과 (0.13ms, 30.4MB)
  테스트 15 〉	통과 (0.18ms, 30.1MB)
  테스트 16 〉	통과 (0.21ms, 30MB)
  테스트 17 〉	통과 (0.64ms, 30.1MB)
  테스트 18 〉	통과 (0.18ms, 30.1MB)
  테스트 19 〉	통과 (0.59ms, 30.2MB)
  테스트 20 〉	통과 (0.26ms, 30.1MB)
   */

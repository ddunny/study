// 약수의 개수와 덧셈
// https://programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    let center = Math.floor(Math.sqrt(i));
    if (getCount(i, center) % 2 === 0) {
      answer += i;
    } else {
      answer -= i;
    }
  }

  return answer;
}

function getCount(target, center) {
  let list = new Set();
  for (let i = 1; i <= center; i++) {
    if (target % i === 0) {
      // 나누어 떨어짐
      let other = target / i;
      list.add(other);
      list.add(i);
    }
  }

  return list.size;
}

/**
테스트 1 〉	통과 (2.63ms, 31.8MB)
테스트 2 〉	통과 (0.41ms, 30MB)
테스트 3 〉	통과 (0.73ms, 30MB)
테스트 4 〉	통과 (0.23ms, 30MB)
테스트 5 〉	통과 (6.61ms, 31.8MB)
테스트 6 〉	통과 (0.24ms, 30.1MB)
테스트 7 〉	통과 (0.18ms, 29.8MB)
*/

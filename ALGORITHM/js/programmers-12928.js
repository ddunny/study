// 약수의 합
// https://programmers.co.kr/learn/courses/30/lessons/12928

function solution(n) {
  if (n === 0) {
    return 0;
  }

  let answer = 0;
  const division = Math.floor(Math.sqrt(n));

  for (let i = 1; i <= division; i++) {
    if (n % i === 0) {
      const theOther = n / i;
      answer = theOther === i ? answer + i : answer + i + theOther;
    }
  }

  return answer;
}

/**
테스트 1 〉	통과 (0.07ms, 29.8MB)
테스트 2 〉	통과 (0.06ms, 30MB)
테스트 3 〉	통과 (0.07ms, 30MB)
테스트 4 〉	통과 (0.07ms, 29.9MB)
테스트 5 〉	통과 (0.07ms, 29.9MB)
테스트 6 〉	통과 (0.06ms, 30MB)
테스트 7 〉	통과 (0.08ms, 30MB)
테스트 8 〉	통과 (0.06ms, 29.9MB)
테스트 9 〉	통과 (0.07ms, 30MB)
테스트 10 〉	통과 (0.07ms, 29.9MB)
테스트 11 〉	통과 (0.07ms, 30MB)
테스트 12 〉	통과 (0.07ms, 29.7MB)
테스트 13 〉	통과 (0.07ms, 30.1MB)
테스트 14 〉	통과 (0.07ms, 30MB)
테스트 15 〉	통과 (0.06ms, 29.6MB)
테스트 16 〉	통과 (0.06ms, 29.7MB)
테스트 17 〉	통과 (0.08ms, 30MB)
 */

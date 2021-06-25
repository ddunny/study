// 2개 이하로 다른 비트
// https://programmers.co.kr/learn/courses/30/lessons/77885

function solution(numbers) {
  return numbers.reduce((acc, value) => {
    if (value % 2 === 0) {
      acc.push(value + 1);
      return acc;
    }

    const padResult = value.toString(2);
    const idx = padResult.lastIndexOf('0');
    const v =
      padResult.substr(0, idx) + '10' + padResult.substr(idx + 2, idx.length);
    acc.push(parseInt(v, 2));
    return acc;
  }, []);
}

/**
테스트 1 〉	통과 (0.43ms, 30.5MB)
테스트 2 〉	통과 (41.17ms, 45.1MB)
테스트 3 〉	통과 (0.18ms, 30.4MB)
테스트 4 〉	통과 (0.41ms, 30.3MB)
테스트 5 〉	통과 (0.50ms, 30.4MB)
테스트 6 〉	통과 (0.45ms, 30.4MB)
테스트 7 〉	통과 (113.72ms, 51.8MB)
테스트 8 〉	통과 (103.01ms, 50.5MB)
테스트 9 〉	통과 (105.97ms, 50.6MB)
테스트 10 〉	통과 (149.92ms, 53MB)
테스트 11 〉	통과 (154.93ms, 52.7MB)
 */

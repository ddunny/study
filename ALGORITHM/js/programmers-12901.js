// 2016년
// https://programmers.co.kr/learn/courses/30/lessons/12901

function solution(a, b) {
  let answer = '';
  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const date = new Date(`${a} ${b} 2016`);
  answer = week[date.getDay()];
  return answer;
}

/**
테스트 1 〉	통과 (4.12ms, 30.4MB)
테스트 2 〉	통과 (3.88ms, 30.2MB)
테스트 3 〉	통과 (5.26ms, 30.4MB)
테스트 4 〉	통과 (0.14ms, 30.5MB)
테스트 5 〉	통과 (0.14ms, 30.1MB)
테스트 6 〉	통과 (4.23ms, 30.4MB)
테스트 7 〉	통과 (5.54ms, 30.5MB)
테스트 8 〉	통과 (7.27ms, 30.4MB)
테스트 9 〉	통과 (3.85ms, 30.2MB)
테스트 10 〉	통과 (0.13ms, 30.3MB)
테스트 11 〉	통과 (4.45ms, 30.3MB)
테스트 12 〉	통과 (0.11ms, 30.4MB)
테스트 13 〉	통과 (4.99ms, 30.4MB)
테스트 14 〉	통과 (3.44ms, 30.4MB)
*/

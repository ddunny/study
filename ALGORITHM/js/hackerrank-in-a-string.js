/**
 * HackerRank in a String!
 * https: //www.hackerrank.com/challenges/hackerrank-in-a-string/problem
 *
 * 주어지는 문자열 안에 h,a,k,e,r,r,a,n,k가 순서대로 존재하는지 확인하는 문제
 * 순서만 중요하며, 발생하는 개수는 상관없음
 * 
 @ddunny
 */

function hackerrankInString(s) {
  let str = s.split("");
  let pattern = "hackerrank".split("");

  let count = 0;
  for (let attr in str) {
    if (str[attr] === pattern[count]) {
      count++;
      continue;
    }
  }

  return (count === pattern.length) ? 'YES' : 'NO';
}
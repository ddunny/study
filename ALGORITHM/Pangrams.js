/**
 * Pangrams
 * https://www.hackerrank.com/challenges/pangrams/problem
 *
 * 영어사전에 있는 pangrams의 뜻: 알파벳 문자 전부를 써서 지은 글
 * 주어진 문장에 알파벳 전체를 모두 사용했는지 판별해야 하는 문제
 * 
 @ddunny
 */
function pangrams(s) {
  let str = s.toLowerCase();
  str = str.split(' ').join('');
  let check = [];
  for (let i = 0; i < str.length; i++) {
    let value = str.charCodeAt(i) - 97;
    if (check.indexOf(value) === -1) {
      check.push(value);
    }
  }

  return (check.length === 26) ? 'pangram' : 'not pangram';
}
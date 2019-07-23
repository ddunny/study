/**
 * Funny String
 * https: //www.hackerrank.com/challenges/funny-string/problem
 *
 * 문자열에 포함된 알파벳의 아스키코드 차 (=n번째 자리와 n+1번째 자리의 알파벳 아스키코드 차이)가 역으로 해도 같은 경우 "Funny" 출력
 * 
 @ddunny
 */

function funnyString(s) {
  let item = [];
  for (let i = s.length - 1; i > 0; i--) {
    let num = Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
    item = [...item, num];
  }

  const item_reverse = item.slice(0).reverse(); // 얕은 복사 필요

  let result = "Funny";
  for (let i in item) {
    if (item_reverse[i] !== item[i]) {
      result = "Not Funny";
    }
  }

  return result;
}
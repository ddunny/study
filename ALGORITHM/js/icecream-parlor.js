/**
 * Ice Cream Parlor
 * https://www.hackerrank.com/challenges/icecream-parlor/submissions/code/119618899
 *
 @ddunny
 */

 function icecreamParlor(m, arr) {
   // m : 둘이 사용할 수 있는 최대 비용
   // arr : 아이스크림의 가격
   // 규칙: 둘은 같은 제품을 중복해서 사지 않는다.
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j <= arr.length; j++) {
        if (arr[i] + arr[j] === m && i !== j) {
          return [i + 1, j + 1];
        }
      }
    }
 }
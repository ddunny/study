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

   let sunny = 0;
   let johnny = 0;

   for (let i = 0; i < arr.length; i++) {
     sunny = i;
     for (let j = 0; j <= arr.length; j++) {
       if (arr[sunny] + arr[j] === m && i !== j) {
         johnny = j;
         return [sunny + 1, johnny + 1];
       }
     }
   }
 }
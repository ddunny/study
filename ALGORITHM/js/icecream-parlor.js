/**
 * Ice Cream Parlor
 * https://www.hackerrank.com/challenges/icecream-parlor/submissions/code/119618899
 *
 * 주어지는 배열의 마지막 값을, 오름차순 정렬에 맞게 올바른 위치를 찾아가는 문제
 * 마지막 값을 제외한 나머지 값들은 올바르게 정렬이 되어 있기 때문에, 이중포문을 돌지 않아도 됨
 * - 배열의 마지막 값(pick)이 맨 앞자리에 오는 경우는 for문 안에서 처리가 불가해서 (arr 범위 벗어남) 배치가 완료된 경우 유효하지 않은 값(-10001)으로 할당
 *   - for문이 끝난 후 pick의 값이 -10001이 아니면 맨 앞자리가 위치인 것이므로 맨 앞 자리에 배치
 * 
 @ddunny
 */

 // Complete the icecreamParlor function below.
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

   //return [sunny+1, johnny+1];
   // 출력 : index => in ascending order.
 }
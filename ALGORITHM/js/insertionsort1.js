/**
 * Insertion Sort - Part 1
 * https://www.hackerrank.com/challenges/insertionsort1/problem
 *
 * 주어지는 배열의 마지막 값을, 오름차순 정렬에 맞게 올바른 위치를 찾아가는 문제
 * 마지막 값을 제외한 나머지 값들은 올바르게 정렬이 되어 있기 때문에, 이중포문을 돌지 않아도 됨
 * - 배열의 마지막 값(pick)이 맨 앞자리에 오는 경우는 for문 안에서 처리가 불가해서 (arr 범위 벗어남) 배치가 완료된 경우 유효하지 않은 값(-10001)으로 할당
 *   - for문이 끝난 후 pick의 값이 -10001이 아니면 맨 앞자리가 위치인 것이므로 맨 앞 자리에 배치
 * 
 @ddunny
 */

function insertionSort1(n, arr) {
  let pick = arr[n - 1]; // remove end of array

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] >= pick) {
      arr[i + 1] = arr[i]; //shift one cell to the right
      console.log(arr.join(" "));
      continue;
    }
    arr[i + 1] = pick;
    pick = -10001; // -10000 <= arr[n] <= 10000
    console.log(arr.join(" "));
    break;
  }

  if (pick !== -10001) {
    arr[0] = pick;
    console.log(arr.join(" "));
  }
}
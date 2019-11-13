
/**
 * 
 * 소수 찾기
 * https://programmers.co.kr/learn/courses/30/lessons/12921
 * 
 * - 가장 시간이 많이 걸렸던 케이스
 *   - 정확성 : 테스트 11 (102.84ms, 56.1MB)
 *   - 효율성: 테스트 3 (106.88 ms, 56.6 MB)
 *
 *
 @ddunny
 */
function solution(n) {
  let answer = 0;
  let arr = [];
  let size = n;
  let target = Math.sqrt(n) // n의 제곱근

  while (size--) arr[size] = false; // arr false 값으로 채우기

  for (let i = 2; i <= target; i++) {
    // 시작하는 첫 숫자는 소수라고 여기기 때문에 no 체크
    for (let j = i * 2; j <= n; j += i) {
      if (!arr[j - 1]) {
        arr[j - 1] = true;
      };
      // 배열의 index와 실제 위치의 차이가 1이기 때문에 자리를 확인할 때는 -1을 처리한 위치의 값을 확인합니다.
    }
  }

  for (let i = 1; i < arr.length; i++) { // true로 바뀌지 않은 곳의 값은 소수입니다.
    if (!arr[i]) answer++;
  }

  return answer;
}

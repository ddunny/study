/**
 * 입국심사
 * https://programmers.co.kr/learn/courses/30/lessons/43238
 *
 * 이분탐색
 * 탐색할 범위를 좁혀나가는게 핵심
 * (생각하기에) 문제 특: 범위가 엄청 넓음
 *
 * 풀이에 참고한 포스팅
 * https://mungto.tistory.com/56
 *
 */
function solution(n, times) {
  let answer = 0;
  times = times.sort((a, b) => a - b); // 오래걸리는 시간 순서대로 정렬

  let min = 1; // 최소시간: 1분
  let max = n * times[times.length - 1]; // 최대시간: 인원수(n) * 심사하는데 제일 오래걸리는 시간

  while (min <= max) {
    // 최소시간과 최대시간의 평균(avg)
    let mid = Math.floor((min + max) / 2);
    let perPeople = 0;

    // 현재 시간으로 돌릴 수 있는 최대인원 구하기
    times.forEach((time) => {
      perPeople += Math.floor(mid / time);
    });

    //최대인원이 총인원보다 크거나 같다면
    if (perPeople >= n) {
      answer = mid; // 현재 시간을 정답에 저장
      max = mid - 1;
    } else {
      min = mid + 1;
    }

    perPeople = 0; // 초기화
  }

  return answer;
}

/**
테스트 1 〉	통과 (0.17ms, 30.3MB)
테스트 2 〉	통과 (0.27ms, 30.3MB)
테스트 3 〉	통과 (2.50ms, 32.1MB)
테스트 4 〉	통과 (120.52ms, 42.4MB)
테스트 5 〉	통과 (131.19ms, 39.8MB)
테스트 6 〉	통과 (124.17ms, 43.4MB)
테스트 7 〉	통과 (148.45ms, 42.8MB)
테스트 8 〉	통과 (146.18ms, 43MB)
테스트 9 〉	통과 (0.17ms, 30.4MB)
 */

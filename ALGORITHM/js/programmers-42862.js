// 체육복

function solution(n, lost, reserve) {
  let answer = 0;
  let place;
  let lostThatSubReserve = lost.filter((v) => reserve.indexOf(v) === -1);
  let reserveThatSubLost = reserve.filter((v) => lost.indexOf(v) === -1);

  answer = n - lostThatSubLost.length;
  lostThatSubReserve.forEach((v) => {
    place =
      reserveThatSubLost.indexOf(v - 1) !== -1
        ? reserveThatSubLost.indexOf(v - 1)
        : reserveThatSubLost.indexOf(v + 1);
    if (place !== -1) {
      answer++;
      reserveThatSubLost[place] = -1;
    }
  });

  return answer;
}
/**
  테스트 1 〉	통과 (0.13ms, 30MB)
  테스트 2 〉	통과 (0.14ms, 30.2MB)
  테스트 3 〉	통과 (0.15ms, 30.1MB)
  테스트 4 〉	통과 (0.13ms, 30.2MB)
  테스트 5 〉	통과 (0.13ms, 30.2MB)
  테스트 6 〉	통과 (0.13ms, 30MB)
  테스트 7 〉	통과 (0.13ms, 30MB)
  테스트 8 〉	통과 (0.13ms, 30.1MB)
  테스트 9 〉	통과 (0.09ms, 30MB)
  테스트 10 〉	통과 (0.14ms, 29.9MB)
  테스트 11 〉	통과 (0.13ms, 30MB)
  테스트 12 〉	통과 (0.12ms, 30MB)
   */

// 카펫
// https://programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
  let blockSum = brown + yellow;
  const division = Math.sqrt(brown + yellow);

  if (division % 1 === 0) {
    return [division, division];
  }

  let naturalNumber = Math.floor(division);

  for (let i = 3; i <= naturalNumber; i++) {
    if (blockSum % i === 0) {
      const theOther = blockSum / i;
      if (yellow === getYellowCount(theOther, i)) {
        return [theOther, i];
      }
    }
  }
}

function getYellowCount(width, height) {
  let yellowCount = 0;
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      if (i !== 0 && i !== width - 1 && j !== 0 && j !== height - 1) {
        yellowCount++;
      }
    }
  }

  return yellowCount;
}

/*
테스트 1 〉	통과 (0.08ms, 30.1MB)
테스트 2 〉	통과 (0.07ms, 30.2MB)
테스트 3 〉	통과 (0.08ms, 30.2MB)
테스트 4 〉	통과 (1.59ms, 31.7MB)
테스트 5 〉	통과 (2.22ms, 32.6MB)
테스트 6 〉	통과 (41.00ms, 32.7MB)
테스트 7 〉	통과 (88.02ms, 32.6MB)
테스트 8 〉	통과 (42.06ms, 32.7MB)
테스트 9 〉	통과 (105.47ms, 32.7MB)
테스트 10 〉	통과 (19.60ms, 32.7MB)
테스트 11 〉	통과 (0.07ms, 30.1MB)
테스트 12 〉	통과 (0.11ms, 30.1MB)
테스트 13 〉	통과 (0.12ms, 30.3MB)
*/

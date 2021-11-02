// 소수찾기
// https://programmers.co.kr/learn/courses/30/lessons/42839

function solution(numbers) {
  let primeList = new Set();
  let visited = new Set();

  let cnt = (curNumber) => {
    for (let i = 0; i < numbers.length; i++) {
      // 이미 확인한 곳이 아니라면 소수판별을 시작한다.
      if (!visited.has(i)) {
        let newNumber = curNumber + numbers.charAt(i);

        // 새로 만든 수가 이전에 만든 적이 없을 때
        if (!primeList.has(newNumber)) {
          // 새로운 소수라면 소수리스트에 넣는다. 0으로 시작하는 경우는 유효한 숫자가 아니다.
          if (newNumber.charAt(0) !== '0' && isPrimeNumber(newNumber * 1)) {
            primeList.add(newNumber);
          }
        }

        visited.add(i);
        cnt(newNumber);
        visited.delete(i);
      }
    }
  };

  cnt('');

  return primeList.size;
}

function isPrimeNumber(num) {
  if (num <= 1) {
    return false;
  }

  if (num == 2 || num == 3) {
    return true;
  }

  const sqrtNum = Math.sqrt(num);
  for (let i = 2; i <= sqrtNum; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

/**
테스트 1 〉	통과 (0.34ms, 30.1MB)
테스트 2 〉	통과 (3.04ms, 32.4MB)
테스트 3 〉	통과 (0.27ms, 30.2MB)
테스트 4 〉	통과 (2.24ms, 32.9MB)
테스트 5 〉	통과 (6.52ms, 33.2MB)
테스트 6 〉	통과 (0.20ms, 30.4MB)
테스트 7 〉	통과 (0.27ms, 30.2MB)
테스트 8 〉	통과 (6.70ms, 32.8MB)
테스트 9 〉	통과 (0.17ms, 30.2MB)
테스트 10 〉	통과 (4.32ms, 33.3MB)
테스트 11 〉	통과 (0.54ms, 30.1MB)
테스트 12 〉	통과 (0.60ms, 30MB)
 */

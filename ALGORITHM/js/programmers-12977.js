// 소수 만들기
// https://programmers.co.kr/learn/courses/30/lessons/12977

function solution(nums) {
  let answer = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let target = nums[i] + nums[j] + nums[k];
        // console.log(nums[i] , nums[j], nums[k])
        if (isPrime(target)) {
          answer++;
        }
      }
    }
  }

  function isPrime(target) {
    //console.log(target, Math.sqrt(target));
    for (let l = 2; l <= Math.sqrt(target); l++) {
      //console.log("target % l === 0", target % l === 0);
      if (target % l === 0) {
        return false;
      }
    }

    return true;
  }

  return answer;
}

/**
테스트 1 〉	통과 (1.57ms, 31.8MB)
테스트 2 〉	통과 (1.99ms, 32.8MB)
테스트 3 〉	통과 (0.43ms, 30.2MB)
테스트 4 〉	통과 (0.39ms, 29.9MB)
테스트 5 〉	통과 (2.57ms, 31.8MB)
테스트 6 〉	통과 (2.92ms, 31.9MB)
테스트 7 〉	통과 (0.26ms, 30.2MB)
테스트 8 〉	통과 (5.64ms, 32MB)
테스트 9 〉	통과 (0.73ms, 30.1MB)
테스트 10 〉	통과 (5.01ms, 32.6MB)
테스트 11 〉	통과 (0.18ms, 29.9MB)
테스트 12 〉	통과 (0.13ms, 30MB)
테스트 13 〉	통과 (0.18ms, 30.1MB)
테스트 14 〉	통과 (0.13ms, 30.1MB)
테스트 15 〉	통과 (0.09ms, 30MB)
테스트 16 〉	통과 (5.08ms, 32.7MB)
테스트 17 〉	통과 (3.95ms, 31.8MB)
테스트 18 〉	통과 (0.12ms, 29.8MB)
테스트 19 〉	통과 (0.11ms, 30.1MB)
테스트 20 〉	통과 (4.81ms, 32MB)
테스트 21 〉	통과 (5.66ms, 32.2MB)
테스트 22 〉	통과 (1.42ms, 32.6MB)
테스트 23 〉	통과 (0.07ms, 29.9MB)
테스트 24 〉	통과 (5.44ms, 32MB)
테스트 25 〉	통과 (5.22ms, 31.8MB)
테스트 26 〉	통과 (0.10ms, 30.1MB)
 */

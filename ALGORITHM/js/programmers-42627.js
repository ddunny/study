// 디스크 컨트롤러
// https://programmers.co.kr/learn/courses/30/lessons/42627
// 참고: https://codevang.tistory.com/316

function solution(jobs) {
  let waitingList = [];
  let end = 0; // 수행되고난 직후의 시간
  let jobsIndex = 0; // jobs 배열의 인덱스
  let count = 0; // 수행된 요청의 갯수
  let rawTotal = 0; // 시간의 합

  const jobList = jobs.sort((a, b) => a[0] - b[0]); // 요청시간 오름차순

  // 요청이 모두 수행될 때까지 반복
  while (count < jobList.length) {
    while (jobsIndex < jobList.length && jobList[jobsIndex][0] <= end) {
      waitingList = pushItemIntoWaitinglist(waitingList, jobList[jobsIndex]);
      jobsIndex++;
    }

    if (waitingList.length > 0) {
      // 대기 배열 존재함
      let excuteTarget = waitingList.shift();
      rawTotal += excuteTarget[1] + end - excuteTarget[0];
      end += excuteTarget[1];
      count++;
    } else {
      // 대기 배열 비었음
      end = jobList[jobsIndex][0];
    }
  }

  return Math.floor(rawTotal / count);
}

function pushItemIntoWaitinglist(arr, item) {
  let appentIdx = 0;

  if (arr.length === 0) {
    arr.push(item);
    return arr;
  }

  for (const element of arr) {
    if (item[1] < element[1]) {
      arr.splice(appentIdx, 0, item); // 수행순서, 오름차순이 되도록 껴넣기
      return arr;
    }
    appentIdx++;
  }

  arr.push(item);
  return arr;
}

/**
  테스트 1 〉	통과 (4.72ms, 33.3MB)
  테스트 2 〉	통과 (4.62ms, 33MB)
  테스트 3 〉	통과 (4.56ms, 33.2MB)
  테스트 4 〉	통과 (4.42ms, 33.1MB)
  테스트 5 〉	통과 (4.64ms, 33.3MB)
  테스트 6 〉	통과 (0.14ms, 30.2MB)
  테스트 7 〉	통과 (3.74ms, 33.1MB)
  테스트 8 〉	통과 (2.21ms, 33MB)
  테스트 9 〉	통과 (0.61ms, 29.9MB)
  테스트 10 〉	통과 (4.10ms, 33.2MB)
  테스트 11 〉	통과 (0.19ms, 29.8MB)
  테스트 12 〉	통과 (0.14ms, 30.2MB)
  테스트 13 〉	통과 (0.19ms, 30.1MB)
  테스트 14 〉	통과 (0.17ms, 30.2MB)
  테스트 15 〉	통과 (0.17ms, 29.9MB)
  테스트 16 〉	통과 (0.16ms, 30.2MB)
  테스트 17 〉	통과 (0.15ms, 30.1MB)
  테스트 18 〉	통과 (0.17ms, 30MB)
  테스트 19 〉	통과 (0.16ms, 30.1MB)
  테스트 20 〉	통과 (0.14ms, 30.1MB)
   */

// 오픈채팅방
// https://programmers.co.kr/learn/courses/30/lessons/42888

function solution(record) {
  var answer = [];
  let userList = new Map();
  const action = (act) => {
    if (act === 'Enter') return '님이 들어왔습니다.';
    if (act === 'Leave') return '님이 나갔습니다.';
  };

  answer = record
    .reduce((acc, value) => {
      let [act, id, nickname] = value.split(' ');
      if (act === 'Enter' || act === 'Change') {
        userList.set(id, nickname);
      }

      if (act !== 'Change') {
        let text = action(act);
        acc.push([id, text]);
      }
      return acc;
    }, [])
    .map((v) => `${userList.get(v[0])}${v[1]}`);

  return answer;
}

/**
  테스트 1 〉	통과 (5.40ms, 30.4MB)
  테스트 2 〉	통과 (4.98ms, 30.5MB)
  테스트 3 〉	통과 (5.48ms, 30.5MB)
  테스트 4 〉	통과 (5.66ms, 30.3MB)
  테스트 5 〉	통과 (6.70ms, 30.8MB)
  테스트 6 〉	통과 (6.83ms, 30.3MB)
  테스트 7 〉	통과 (6.69ms, 30.8MB)
  테스트 8 〉	통과 (6.63ms, 30.4MB)
  테스트 9 〉	통과 (6.73ms, 30.7MB)
  테스트 10 〉	통과 (6.64ms, 30.3MB)
  테스트 11 〉	통과 (6.02ms, 30.9MB)
  테스트 12 〉	통과 (6.19ms, 30.5MB)
  테스트 13 〉	통과 (6.98ms, 30.6MB)
  테스트 14 〉	통과 (7.08ms, 30.4MB)
  테스트 15 〉	통과 (5.56ms, 30.3MB)
  테스트 16 〉	통과 (5.23ms, 30.5MB)
  테스트 17 〉	통과 (5.83ms, 30.3MB)
  테스트 18 〉	통과 (5.49ms, 30.6MB)
  테스트 19 〉	통과 (6.97ms, 30.6MB)
  테스트 20 〉	통과 (6.67ms, 30.8MB)
  테스트 21 〉	통과 (7.89ms, 30.8MB)
  테스트 22 〉	통과 (6.69ms, 30.8MB)
  테스트 23 〉	통과 (6.57ms, 30.6MB)
  테스트 24 〉	통과 (6.52ms, 30.3MB)
  테스트 25 〉	통과 (120.21ms, 79.7MB)
  테스트 26 〉	통과 (167.14ms, 92.2MB)
  테스트 27 〉	통과 (190.50ms, 98.6MB)
  테스트 28 〉	통과 (189.30ms, 103MB)
  테스트 29 〉	통과 (192.16ms, 98.1MB)
  테스트 30 〉	통과 (138.22ms, 84.7MB)
  테스트 31 〉	통과 (183.98ms, 105MB)
  테스트 32 〉	통과 (140.96ms, 93.3MB)
   */

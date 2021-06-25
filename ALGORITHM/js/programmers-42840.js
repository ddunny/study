// 모의고사

function solution(answers) {
  let list = [0, 0, 0];
  let answer = [];
  const firstUser = [1, 2, 3, 4, 5];
  const secondUser = [2, 1, 2, 3, 2, 4, 2, 5];
  const thirdUser = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    list[0] = answers[i] === firstUser[i % 5] ? list[0] + 1 : list[0];
    list[1] = answers[i] === secondUser[i % 8] ? list[1] + 1 : list[1];
    list[2] = answers[i] === thirdUser[i % 10] ? list[2] + 1 : list[2];
  }

  const max = Math.max(...list);

  for (let i = 0; i < list.length; i++) {
    if (list[i] !== max) continue;
    answer.push(i + 1);
  }

  return answer;
}

/**
  테스트 1 〉	통과 (0.08ms, 30.2MB)
  테스트 2 〉	통과 (0.10ms, 30.1MB)
  테스트 3 〉	통과 (0.14ms, 30MB)
  테스트 4 〉	통과 (0.10ms, 30.2MB)
  테스트 5 〉	통과 (0.14ms, 30MB)
  테스트 6 〉	통과 (0.16ms, 29.6MB)
  테스트 7 〉	통과 (261.74ms, 32.6MB)
  테스트 8 〉	통과 (0.69ms, 30MB)
  테스트 9 〉	통과 (4.32ms, 33MB)
  테스트 10 〉	통과 (0.97ms, 29.7MB)
  테스트 11 〉	통과 (4.33ms, 33MB)
  테스트 12 〉	통과 (4.30ms, 32.9MB)
  테스트 13 〉	통과 (0.31ms, 30.2MB)
  테스트 14 〉	통과 (4.16ms, 33.1MB)
   */

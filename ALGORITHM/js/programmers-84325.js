// 직업군 추천하기
// https://programmers.co.kr/learn/courses/30/lessons/84325

function solution(table, languages, preference) {
  let answer = new Map();
  let max = 0;
  table.map((row) => {
    const element = row.split(' ');
    const title = element[0];
    const content = element.slice(1);
    const singleResult = languages.reduce((acc, value, index) => {
      let place = content.length - content.indexOf(value);
      place = place > content.length ? 0 : place;
      const myPrefer = preference[index];

      // console.log('languages ', languages, ' place: ', place, ' myPrefer: ', myPrefer);

      acc += place * myPrefer;
      return acc;
    }, 0);

    if (max < singleResult) {
      max = singleResult;
    }

    answer.set(title, singleResult);
  });
  // console.log([...answer]);

  return [...answer]
    .filter((v) => v[1] === max)
    .sort()
    .slice(0, 1)
    .map((v) => v[0])
    .join('');
}

/**
테스트 1 〉	통과 (0.17ms, 30.1MB)
테스트 2 〉	통과 (0.17ms, 29.9MB)
테스트 3 〉	통과 (0.21ms, 30.3MB)
테스트 4 〉	통과 (0.20ms, 29.8MB)
테스트 5 〉	통과 (0.20ms, 30MB)
테스트 6 〉	통과 (0.26ms, 30.2MB)
테스트 7 〉	통과 (0.17ms, 30.1MB)
테스트 8 〉	통과 (0.22ms, 30.2MB)
테스트 9 〉	통과 (0.16ms, 30.1MB)
테스트 10 〉	통과 (0.19ms, 29.9MB)
 */

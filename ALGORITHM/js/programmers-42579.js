// 베스트앨범
// https://programmers.co.kr/learn/courses/30/lessons/42579

function solution(genres, plays) {
  let playSumList = new Map();
  let list = genres
    .map((v, i) => {
      let sum = playSumList.get(v);
      if (!sum) {
        playSumList.set(v, plays[i]);
      } else {
        playSumList.delete(v);
        playSumList.set(v, plays[i] + sum * 1);
      }
      return { genre: v, play: plays[i], index: i };
    })
    .sort((a, b) => {
      return a.play > b.play ? -1 : 1;
    });

  return Array.from(playSumList)
    .sort((a, b) => (a[1] < b[1] ? 1 : -1))
    .reduce((acc, v) => {
      acc = [...acc, ...list.filter((item) => item.genre === v[0]).slice(0, 2)];
      return acc;
    }, [])
    .map((v) => v.index);
}

/**
  테스트 1 〉	통과 (0.25ms, 30.2MB)
  테스트 2 〉	통과 (0.26ms, 29.9MB)
  테스트 3 〉	통과 (0.25ms, 30MB)
  테스트 4 〉	통과 (0.21ms, 30.1MB)
  테스트 5 〉	통과 (0.49ms, 30.2MB)
  테스트 6 〉	통과 (0.41ms, 30.2MB)
  테스트 7 〉	통과 (0.39ms, 30.1MB)
  테스트 8 〉	통과 (0.34ms, 30MB)
  테스트 9 〉	통과 (0.26ms, 30.2MB)
  테스트 10 〉	통과 (0.53ms, 30MB)
  테스트 11 〉	통과 (0.28ms, 30MB)
  테스트 12 〉	통과 (0.37ms, 30MB)
  테스트 13 〉	통과 (0.45ms, 30.2MB)
  테스트 14 〉	통과 (0.45ms, 30.2MB)
  테스트 15 〉	통과 (0.27ms, 29.8MB)
   */

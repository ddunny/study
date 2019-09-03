/**
 * 영어 끝말잇기
 * https://programmers.co.kr/learn/courses/30/lessons/12981
 *
 * 
 @ddunny
 */

function solution(n, words) {
  let turn = 1;
  let target = -1;

  for (let idx = 0; idx < words.length - 1; idx++) {
    let now = idx + 1;
    let calcNum = now + 1; // 답을 출력하기 위해 위치 재정의

    // 끌말잇기가 이루어지지 않은 경우
    if (words[idx].slice(-1) !== words[now].split("")[0]) {
      target = calcNum % n;
      target = (target === 0) ? n : target;
      break;
    }

    // 이미 말한 단어를 말한 경우
    if (idx !== 0 && words.slice(0, now).indexOf(words[now]) !== -1) {
      target = calcNum % n;
      target = (target === 0) ? n : target;
      break;
    }

    if (calcNum % n === 0) turn++;
  }

  if (target === -1) return [0, 0]; // 탈락자가 발생하지 않은 경우

  return [target, turn];
}
/**
 * 영어 끝말잇기
 * https://programmers.co.kr/learn/courses/30/lessons/12981
 *
 * 
 * 끝말잇기가 이루어지지 않은 경우
 * - words[idx].slice(-1) !== words[now].split("")[0];
 * 앞단어의 끝자리, 현재 단어의 앞자리가 다른 경우
 * 
 * 이미 말한 단어를 말한 경우
 * - idx !== 0 && words.slice(0, now).indexOf(words[now]) !== -1;
 * 가장 앞에 있는 단어는 볼 필요없음(idx !== 0);
 * 현재 단어가 이미 나왔는지 확인(words.slice(0, now).indexOf(words[now]) !== -1)
* 
 * 타겟은 걸린 때에 계산
 * - calcNum % n;
 * 배열은 리얼 순서보다 - 1 된 상태이기 때문에, 현재위치(now) 값에 + 1 을 해주어 계산
 * ; n으로 나누었을 때 나머지가 걸린 타겟임
 *   ; n = 3 일 때 나올 수 있는 나머지 0, 1, 2
 *     ; 0 인 경우는 3 번째 차례의 아이기 때문에 - > (target === 0) ? n : target 로 처리
 * 
 * 앞에 탈락자가 발생하지 않으면, 순서는 계속 돌아갈것이기 때문에
 * for문 마지막에 if (calcNum % n === 0) turn++;
 * 
 * target : 나올 수 없는 값을 초기값으로 해서. 마지막까지 그값이다 하면 [0,0] 리턴
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
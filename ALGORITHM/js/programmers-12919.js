// 서울에서 김서방 찾기
// https://programmers.co.kr/learn/courses/30/lessons/12919

function solution(seoul) {
  let answer = '김서방은 ' + seoul.findIndex((v) => v === 'Kim') + '에 있다';
  return answer;
}

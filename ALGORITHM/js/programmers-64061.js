// 크레인 인형뽑기 게임

function solution(board, moves) {
  var answer = 0;
  var store = [];

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let toy = board[j][moves[i] - 1];

      if (!toy) continue;

      store.push(toy);
      board[j][moves[i] - 1] = 0;
      break;
    }

    if (
      store.length >= 2 &&
      store[store.length - 1] === store[store.length - 2]
    ) {
      store.pop();
      store.pop();
      answer += 2;
    }
  }
  return answer;
}

/**
테스트 1 〉	통과 (0.12ms, 29.8MB)
테스트 2 〉	통과 (0.07ms, 30.1MB)
테스트 3 〉	통과 (0.11ms, 29.9MB)
테스트 4 〉	통과 (3.44ms, 32.6MB)
테스트 5 〉	통과 (0.11ms, 29.9MB)
테스트 6 〉	통과 (0.12ms, 30MB)
테스트 7 〉	통과 (0.18ms, 30MB)
테스트 8 〉	통과 (0.49ms, 30.2MB)
테스트 9 〉	통과 (0.43ms, 30MB)
테스트 10 〉	통과 (0.51ms, 30.1MB)
테스트 11 〉	통과 (0.81ms, 30.1MB)
 */

// 다리를 지나는 트럭
// https://programmers.co.kr/learn/courses/30/lessons/42583

function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let bridge = [];
  let completeList = [];
  let readyListSize = truck_weights.length;
  let currntWeightSum = 0;

  // 대기 트럭의 개수와 다리를 지난 트럭의 개수가 같으면 반복 끝
  while (completeList.length !== readyListSize) {
    // 다리 건너기
    if (bridge.length > 0) {
      bridge.map((v) => (v.count += 1));
      if (bridge[0].count > bridge_length) {
        currntWeightSum -= bridge[0].weight;
        completeList.push(bridge.shift());
      }
    }

    // 다리 지난 트럭
    // 무게 견딜 수 있고 길이 안에 들어갈 수 있어야 함
    if (
      truck_weights[0] + currntWeightSum <= weight &&
      bridge.length + 1 <= bridge_length
    ) {
      currntWeightSum += truck_weights[0];
      let nextTarget = { weight: truck_weights.shift(), count: 1 };
      bridge.push(nextTarget);
    }

    answer++;
  }

  return answer;
}

/**
테스트 1 〉	통과 (0.98ms, 30.3MB)
테스트 2 〉	통과 (12.66ms, 34MB)
테스트 3 〉	통과 (0.20ms, 30.3MB)
테스트 4 〉	통과 (11.29ms, 34MB)
테스트 5 〉	통과 (24.46ms, 34.2MB)
테스트 6 〉	통과 (16.37ms, 34.2MB)
테스트 7 〉	통과 (0.68ms, 30.2MB)
테스트 8 〉	통과 (0.34ms, 30MB)
테스트 9 〉	통과 (5.71ms, 32.3MB)
테스트 10 〉	통과 (0.38ms, 30.1MB)
테스트 11 〉	통과 (0.17ms, 30.1MB)
테스트 12 〉	통과 (0.47ms, 30MB)
테스트 13 〉	통과 (0.97ms, 30.2MB)
테스트 14 〉	통과 (0.20ms, 30.2MB)
 */

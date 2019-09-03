/**
 * 체육복
 * https://programmers.co.kr/learn/courses/30/lessons/42862
 *
 * - 테스트 케이스 12개중 마지막 케이스 통과 못함
 * - 통과 못했던 이유 : 중복을 먼저 제거 해야 함 
 *   - 참고 : https://programmers.co.kr/learn/questions/5434
 @ddunny
 */

function solution(n, lost, reserve) {
    // n: 전체 학생 수
    // lost: 도난당한 학생들의 번호가 담긴 배열
    // reserve: 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열

    let answer = n - lost.length; // 확실하게 수업을 들을 수 있는 학생의 수

    // 여벌을 가져온 학생이 옷을 도난당한 경우 처리
    for (let i = 0; i < lost.length; i++) {
        let w = reserve.indexOf(lost[i]);
        if (w !== -1) {
            lost[i] = -99;
            reserve[w] = -99;
            answer++; // 운동할 수 있으므로 ++
        }
    }

    for (let idx in lost) { // 운동할 수 있는지 처리해야 하니까 lost 기준으로 loop
        if (lost[idx] === -99) continue;
        let pre = reserve.indexOf(lost[idx] - 1);
        let next = reserve.indexOf(lost[idx] + 1);

        if (pre !== -1 || next !== -1) {
            if (pre !== -1) {
                reserve[pre] = -99;
            } else {
                reserve[next] = -99;
            }
            answer++; // 운동할 수 있으므로 ++
        }
    }
    return answer;
}
/**
 * 체육복
 * https://programmers.co.kr/learn/courses/30/lessons/42862
 *
 * - 테스트 케이스 12개중 마지막 케이스 통과 못함
 @ddunny
 */

function solution(n, lost, reserve) {
    // n: 전체 학생 수
    // lost: 도난당한 학생들의 번호가 담긴 배열
    // reserve: 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열

    let answer = n - lost.length; // 확실하게 수업을 들을 수 있는 학생의 수

    // 여벌을 가져온 번호의 학생이 도난당한 리스트에 있는지 확인
    // 여벌이 가져온 학생이 옷을 도난당했을 경우 //reseve 에서 제거하기 

    for (let idx in lost) { // 운동할 수 있는지 처리해야 하니까 이거 기준으로 한다
        let pre = reserve.indexOf(lost[idx] - 1);
        let next = reserve.indexOf(lost[idx] + 1);
        let now = reserve.indexOf(lost[idx]);

        if (now !== -1) { // 여벌도 있고, 도난도 당했을 경우
            reserve[now] = -99;
            answer++;
            continue;
        }

        if (pre !== -1 || next !== -1) {
            if (pre !== -1) {
                reserve[pre] = -99;
            } else {
                reserve[next] = -99;
            }
            answer++;
        }
    }
    return answer;
}
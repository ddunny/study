/**
 * 124 나라의 숫자
 * https://programmers.co.kr/learn/courses/30/lessons/12899
 *
 * 
 @ddunny
 */
 
 function solution(n) {
    let answer = ''; // string
    let share = n;

    while (share > 0) {
        let remain = share % 3;
        share = Math.floor(share / 3); // 나머지 버린 몫만 필요
        if (remain === 0) {
            answer = (4 + '') + answer; // 4 붙이기
            share = share - 1;
            continue;
        }
        answer = (remain + '') + answer;
    }
   
    return answer;
}

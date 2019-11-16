/** 
 * 큰 수 만들기
 * https://programmers.co.kr/learn/courses/30/lessons/42883
 * - 통과하지 못한 문제 (시간초과)
 * 
 * @ddunny
*/
function solution(number, k) {
    if (number.charAt(0) === 0) return '0';
    let v = {complete: false, max: '', start: 0, end: k, str: number, length: number.length - k};
    while (true) {
        if (v.complete) {
            return v.max;
        }
        v = loop(v);
    }
}

function loop(v) {
    if (v.start === v.end) {
        let concatStr = v.max + v.str.charAt(v.end);
        if (concatStr.length === v.length) {
            return {complete: true, max: concatStr, start: v.start, end : v.end, str: v.str, length: v.length};
        } else {
            return {complete: false, max: concatStr, start: v.start + 1, end : v.end + 1, str: v.str, length: v.length};
        }
        
    }
    
    let start = v.start;
    let maxSingle = 0;
    
    for (let i = v.start; i <= v.end; i++) {
        let cur = v.str.charAt(i) * 1;
        if (maxSingle < cur) {
            maxSingle = cur;
            start = i;
        }
    }

    return {end: v.end + 1, max: v.max + maxSingle, complete: false, start: start + 1, str: v.str, length: v.length};
}

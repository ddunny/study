/** 
 * 올바른 괄호
 * https://programmers.co.kr/learn/courses/30/lessons/12909
 * 특이사항
 * 1. 통과하지 못한 소스
 * - 통과하지 못한 케이스 : ())(()
 * @ddunny
*/

function solution(s){
    const length = s.length;
    if (s.charAt(0) === '(' && s.charAt(length - 1) === ')') {
        let count = 0;
        s.split('').map(element => element === '(' ? count++ : count--);
        return count === 0 ? true : false; 
    }
    return false;
}

/** 
 * 올바른 괄호
 * https://programmers.co.kr/learn/courses/30/lessons/12909
 * stack을 이용해야 모든 케이스를 통과할 수 있음
 * @ddunny
*/

function solution(s){
    const length = s.length;
    let arr = [];
    for (const item of s) {
        if (item === '(') {
            arr.push(item);
            continue;
        }
        
        if (arr.length === 0) return false;
        arr.pop();
    }
    
    return arr.length === 0 ? true : false; 
}

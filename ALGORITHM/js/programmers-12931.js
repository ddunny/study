  
/** 
 * 자릿수 더하기
 * https://programmers.co.kr/learn/courses/30/lessons/12931
 * 
 * @ddunny
*/
function solution(n) {
    return (n + '').split('').reduce((acc, cur) => acc + cur * 1, 0);
}

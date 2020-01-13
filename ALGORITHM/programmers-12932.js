/** 
 * 자연수 뒤집어 배열로 만들기
 * https://programmers.co.kr/learn/courses/30/lessons/12932
 * 
 * @ddunny
*/
function solution(n) {
    n = n + '';
    let length = n.length;
    return n.split('').reduce((acc, cur, idx) => {
        acc.push(n[length - idx - 1] * 1);
        return acc;
    }, []);
}

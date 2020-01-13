/**
 * 나누어 떨어지는 숫자 배열
 * https://programmers.co.kr/learn/courses/30/lessons/12910
 *
 * 
 @ddunny
 */
 
 function solution(arr, divisor) {
    let answer = arr.sort((a, b)=> a - b).filter( v => v % divisor === 0);
    return (answer.length === 0) ? [-1] : answer;
}

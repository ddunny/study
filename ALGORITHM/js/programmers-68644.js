/** 
 * 두 개 뽑아서 더하기
 * https://programmers.co.kr/learn/courses/30/lessons/68644
 * 
 * @ddunny
*/

function solution(numbers) {
    var answer = [];
    
    for(let i = 0; i < numbers.length - 1; i++) {
        for (let j = i+1; j < numbers.length; j++) {
            answer.push(numbers[i]+numbers[j]);
        }
    }
    
    return Array.from(new Set(answer)).sort((a,b)=>a-b);
}

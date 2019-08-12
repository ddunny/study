/**
 * K번째수
 * https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript
 *
 * 
 @ddunny
 */
function solution(array, commands) {
    let answer = [];
    let item = [];
    for (let idx in commands) {
        item = array
            .filter((v, x)=>{
                if ( commands[idx][0] <= x + 1 && x + 1 <= commands[idx][1]) {
                    return v;
                }
            })
            .sort((a, b)=> a - b)
            .filter((v, x)=> {
            if(commands[idx][2] === x + 1){
                return v;
            }
        });
        
        answer.push(item.join("")*1);
    }
    
    return answer;
}
/** 
 * 이중우선순위큐
 * https://programmers.co.kr/learn/courses/30/lessons/42628?language=javascript
 * 
 * @ddunny
*/
function solution(operations) {
    let queue = [];
    for (const operation of operations) {
       let [oper, value] = operation.split(" ");
        
        if (oper === "I") {
            queue.push(value*1);
            continue;
        }
        if (oper === "D") {
            if (queue.length < 1) continue;
            let v = (value === "1") ? Math.max(...queue) : Math.min(...queue);
            queue.splice(queue.indexOf(v), 1);
        } 
    };
    
    return queue.length === 0 ? [0,0] : [Math.max(...queue), Math.min(...queue)];
}

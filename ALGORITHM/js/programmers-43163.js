/** 
 * 단어 변환
 * https://programmers.co.kr/learn/courses/30/lessons/43163
 * 
 * @ddunny
*/
function solution(begin, target, words) {
    if (!words.includes(target)) {
        return 0;
    };
    let queue = [];
    let visited = [];
    const getDiff = (a, b) => a.split("").reduce((cnt, curValue, curIndex) => cnt + (curValue !== b[curIndex]), 0);

    queue.push(begin);
    visited[begin] = 0; // 방문처리

    while(queue.length > 0) {
        let cur = queue.shift();

        if (cur === target) {
            return visited[cur];
        }

        for (const word of words) {
            if (getDiff(cur, word) === 1 && visited[word] === undefined) {
                queue.push(word);
                visited[word] = visited[cur] + 1;
            }
        } 
    }

    return 0;
}

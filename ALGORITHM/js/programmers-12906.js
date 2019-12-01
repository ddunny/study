/** 
 * 같은 숫자는 싫어
 * https://programmers.co.kr/learn/courses/30/lessons/12906
 * - 이전에 나온 숫자라도 연속되지만 않는다면 모두 결과에 포함되어야 함
 *   - indexOf를 사용하는 것보다 변수를 이용하여, 이전에 정답리스트에 들어갔는지 체크하는 것이 더욱 효율적임
 * 
 * @ddunny
*/

function solution(arr) {
    let beforenumber = -1;
    return arr.reduce((acc, cur, idx) => {
        // if (acc.indexOf(arr[idx]) === -1 || (acc.indexOf(arr[idx]) !== -1 && acc[acc.length - 1] !== arr[idx])) acc.push(arr[idx]);
        if (beforenumber !== arr[idx]) {
            acc.push(arr[idx]);
            beforenumber = arr[idx];
        }
        return acc;
    },[]);
}

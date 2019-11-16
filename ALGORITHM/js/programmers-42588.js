/** 
 * 탑
 * https://programmers.co.kr/learn/courses/30/lessons/42588
 * 
 * @ddunny
*/
function solution(heights) {   
    return heights
        .reduce((acc, curValue, curIndex) => {
        let v = heights.length - 1 - curIndex; // 뒤에서부터 진행
        let result = 0;
        
        for (let i = v - 1 ;i >= 0; i--) {
            if (heights[i] > heights[v] ) {
                result = i + 1;
                break;
            }
        }
        
        acc.unshift(result);
        return acc;
        
    }, []);
}

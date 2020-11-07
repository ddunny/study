/** 
 * 정수 삼각형
 * https://programmers.co.kr/learn/courses/30/lessons/43105
 * 
 * @ddunny
*/

function solution(triangle) {
    let max = -Infinity;

    for (let i = 1, iend = triangle.length; i < iend; i++) {
        for (let j = 0, jend = triangle[i].length; j < jend; j++) {
            if (j === 0) { // 맨 왼쪽
                triangle[i][j] = triangle[i-1][j] + triangle[i][j];
            }
            else if (j === jend - 1) { // 맨 오른쪽
                triangle[i][j] = triangle[i-1][j-1] + triangle[i][j];
            }
            else { // 그 중간
                triangle[i][j] = Math.max(triangle[i-1][j] + triangle[i][j], triangle[i-1][j-1] + triangle[i][j]);
            }
            max = (triangle[i][j] > max) ?  triangle[i][j] : max;
        }
    }
    return max;
}

/**
 * Super Reduced String
 * https: //www.hackerrank.com/challenges/reduced-string/problem
 *
 * a. 2개가 연달아 있을 경우, 연달아있는 알파벳을 지워야 함
 * 위 과정을 반복해나가는 것
 * 반복없이 1개씩만 최종으로 남아야 함
 * a 과정을 통해 남은 결과물이 없다면 Empty String 출력
 * a 과정을 통해 남은 결과물이 있다면 결과물 출력
 * 
 @ddunny
 */
function superReducedString(s) {
    if (s.length === 0) {
        return 'Empty String';
    }
    let result = s;
    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] === s[i]) {
            result = superReducedString(s.split(s[i - 1] + s[i]).join(''));
            break;
        }
    }
    return result;
}
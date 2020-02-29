/**
 * HackerRank in a String!
 * https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem
 * 
 @ddunny
 */

function isValid(s) {
    // a 케이스 커버
    if (s.length === 1) return 'YES';

    const charArr = [];
    let max = { item: -1, count: 0 };
    for (const ele of s) {
        let current = ele.charCodeAt() - 97; // 알파벳 순서대로 카운팅하기 위해 사용
        charArr[current] = (charArr[current] === undefined) ? 1 : charArr[current] + 1;
        if (max.count < charArr[current]) max = {item: current, count: charArr[current]};
    }

    const basic = max.item - 1 === -1 ? charArr[max.item] : charArr[max.item + 1]; // 알파벳의 개수가 작은 수에 속하는 경우를 찾기 위함

    let reg = new RegExp(basic, 'gi');

    if (charArr.join('').replace(reg, '') === '') return 'YES'; // 모두 다 같은 숫자

    // aabbccc 케이스 커버
    // 제거해야 하는 알파벳의 개수가 큰 수에 속하는 경우
    if (charArr.filter(v => max.count === v).length === 1) {
        charArr[max.item] = charArr[max.item] - 1;
        return (charArr.join('').replace(reg, '') === '') ? 'YES' : 'NO';
    }

    // aabbc 케이스 커버
    // 제거해야 하는 알파벳의 개수가 작은 수에 속하는 경우
    reg = new RegExp(max.count, 'gi');
    return (charArr.join('').replace(reg, '').length === 1) ? 'YES' : 'NO';
}

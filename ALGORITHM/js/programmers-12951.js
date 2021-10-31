// JadenCase 문자열 만들기
// https://programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
  let answer = '';
  answer = s
    .toLowerCase()
    .split(' ')
    .reduce((acc, value) => {
      let a = value
        .split('')
        .map((v, i) => {
          if (i === 0) {
            let onlyEnglishPtn = /[a-z]/;

            if (onlyEnglishPtn.test(v)) {
              return v.toUpperCase();
            }
          }

          return v;
        })
        .join('');

      acc.push(a);
      return acc;
    }, [])
    .join(' ');
  return answer;
}

/**
테스트 1 〉	통과 (0.29ms, 30.3MB)
테스트 2 〉	통과 (0.28ms, 30.4MB)
테스트 3 〉	통과 (0.32ms, 30MB)
테스트 4 〉	통과 (0.33ms, 30.2MB)
테스트 5 〉	통과 (0.34ms, 30.1MB)
테스트 6 〉	통과 (0.30ms, 30MB)
테스트 7 〉	통과 (0.46ms, 30.3MB)
테스트 8 〉	통과 (0.31ms, 30.2MB)
테스트 9 〉	통과 (0.30ms, 30.1MB)
테스트 10 〉	통과 (0.18ms, 30.3MB)
테스트 11 〉	통과 (0.31ms, 30.2MB)
테스트 12 〉	통과 (0.33ms, 30.4MB)
테스트 13 〉	통과 (0.32ms, 30MB)
테스트 14 〉	통과 (0.33ms, 30.2MB)
테스트 15 〉	통과 (0.32ms, 30.4MB)
테스트 16 〉	통과 (0.17ms, 30.2MB)
 */

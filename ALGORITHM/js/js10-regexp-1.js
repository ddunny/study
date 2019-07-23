/*
* Day 7: Regular Expressions I
* https://www.hackerrank.com/challenges/js10-regexp-1/problem
* 
* 문제 설명
* - 주어지는 문자열 s는 모두 소문자 알파벳입니다.
* - 주어지는 문자열의 길이는 3글자 이상입니다.
* 1. 맨 앞자리와 맨 뒷자리가 알파벳 모음 (a,e,i,o,u) 이고, 일치한다면 true를 리턴합니다.
* 2. 1이 아니라면 false를 리턴합니다.
*
* @ddunny
*/
function regexVar() {
    let re = /^([aeiou])[a-z]+\1$/;
    return re;
}

/**
 * 정규표현식 (https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/%EC%A0%95%EA%B7%9C%EC%8B%9D#special-negated-character-set)
 *  ^ : 입력의 시작 부분에 대응됩니다.
 *   - /^A/ 는 "an A" 의 'A'와는 대응되지 않습니다, 그러나 "An E" 의 'A'와는 대응됩니다.
 * (x) : 'x'에 대응되고, 그것을 기억합니다. 포획 괄호라고 부릅니다.
 * [xyz] : 문자셋(Character set). 하이픈을 이용하여 문자의 범위를 지정해줄 수 있습니다. [a-d] 는 패턴 [abcd] 와 똑같이 동작
 * + : 앞의 표현식이 1회 이상 연속으로 반복되는 부분과 대응됩니다. {1,} 와 같은 의미입니다.
 * \n:  \n 패턴은 앞의 n번째 포획괄호에 대응된 문자열과 똑같은 문자열에 대응됩니다. (n is number) 
 *   - 위 방법은 정규식 패턴에서 사용하는 방식이고, 치환 부분에서 사용하기 위해서는 $n으로 사용해야 합니다.
 * $ : 입력의 끝 부분과 대응됩니다. 
 *   - /t$/ 는 "eater" 의 't'에는 대응되지 않습니다, 그러나 "eat" 과는 대응됩니다.
 * 
 * 정규 표현식 한눈에 보기
 * https://regexper.com/#%2F%5E%28%5Baeiou%5D%29%5Ba-z%5D%2B%5C1%24%2F
 */
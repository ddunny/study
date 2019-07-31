function solution(numbers) {
    var answer = '';
    
    let temp = numbers.slice(0);
    
    temp.sort((a,b)=> {
        const charA = a.toString().charAt(0);
        const charB = b.toString().charAt(0);
        if (charA == charB) {
            return a < b;
        }
        return charA < charB;
    }); // 첫번째 자리 기준으로 정렬
    
    console.log(`temp ${temp}`);
    
    answer = temp.join("").toString(); // 정답이 너무 클 수 있으니 문자열로 바꾸어 return
    return answer;
}

// 첫번째 풀이
// [3, 30, 34, 5, 9]	9534330 통과 못함
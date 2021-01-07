// 덧셈알고리즘 풀이 (큰수더하기)

function answer(a,b) {
  if (a.length > b.length) {
  	b = b.padStart(a.length, "0");
  } else {
  	a = a.padStart(b.length, "0");
  }
  
  let aTarget = "";
  let bTarget = "";
  let carry = 0;
  let temp = [];
  let result = [];
  
  for (let i = a.length - 1; i >= 0; i--) {
  	aTarget = a.charAt(i) * 1;
  	bTarget = b.charAt(i) * 1;
    temp = ((aTarget + bTarget + carry) + "").split("");
    carry = (temp.length === 2) ? temp[0] * 1 : 0;
    result.unshift(temp.length === 2 ? temp[1] : temp[0]);
    a = a.slice(0, i);
    b = b.slice(0, i);
  }
  
  if (carry !== 0) result.unshift(carry + "");
  
  return result.join("");
}

console.log(answer("9223372036854775807","9223372036854775808") === "18446744073709551615" ? "성공" : "실패");
console.log(answer("123","43") === "166" ? "성공" : "실패");
console.log(answer("129","43") === "172" ? "성공" : "실패");
console.log(answer("111","222") === "333" ? "성공" : "실패");
console.log(answer("34","222") === "256" ? "성공" : "실패");

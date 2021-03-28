  
/** 
 * 신규 아이디 추천
 * https://programmers.co.kr/learn/courses/30/lessons/72410
 * - 
 * 
 * @ddunny
*/

function solution(new_id) {
  let answer = "";
  const allowed_char = /[^a-z0-9_.-]/g;
  const continue_dot = /(\.){2,}/g;
  const side_dot = /^[.]|[.]$/g;

  let copy_new_id = new_id
    .toLowerCase()
    .replace(allowed_char, "")
    .replace(continue_dot, ".")
    .replace(side_dot, "");

  copy_new_id =
    copy_new_id.length === 0
      ? "a"
      : copy_new_id.length >= 16
      ? copy_new_id.substr(0, 15).replace(side_dot, "")
      : copy_new_id;

  if (copy_new_id.length <= 2) {
    const last_char = copy_new_id.charAt(copy_new_id.length - 1);
    while (copy_new_id.length < 3) {
      copy_new_id = copy_new_id.concat("", last_char);
    }
  }

  answer = copy_new_id;

  return answer;
}

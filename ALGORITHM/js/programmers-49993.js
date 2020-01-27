/**
 * 스킬트리
 * https://programmers.co.kr/learn/courses/30/lessons/49993
 *
 * 
 @ddunny
 */
function solution(skill, skill_trees) {
    let answer = 0;
        
    for (let item of skill_trees) {
        let temp = skill.split('');
        let now = temp[0];
        let counting = false;
        for (let item_detail of item) {
            let current_detail = skill.indexOf(item_detail);
            if (current_detail > -1) { // 포함
                if (now === item_detail) {
                    if (temp.length > 0) {
                        temp.shift();
                        now = temp[0];
                        if (!now) { // 선행 스킬 순서를 만족함
                            counting = true;
                            break;
                        }
                        continue;
                    }
                } else { // 불가능한 스킬트리
                    counting = false;
                    break;
                }
            }
            
            counting = true; // 선행스킬을 아예 포함하지 않는 경우에도 가능한 스킬트리이므로 true 처리
        }
        if (counting) answer++;
        
    }
    return answer; 
}

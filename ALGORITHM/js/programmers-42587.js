/** 
 * 프린터
 * https://programmers.co.kr/learn/courses/30/lessons/42587
 * - 
 * 
 * @ddunny
*/

function solution(priorities, location) {    
    let mapping = priorities.map((v, i) => {
        return {'origin': i, 'value': v};
    });
       
    let target;
    let print = [];
    
    // 대기목록 세팅
    while (true) {
        
        // 대기목록에 대상이 없으면 while문 종료
        if (mapping.length === 0) break;
        
         target = mapping[0]; // 인쇄대상(리스트 가장 앞에 있는 문서)
        
        // 대기목록에 target보다 높은 우선순위가 없다면 인쇄
        if (mapping.find(v => target.value < v.value) === undefined) {
            print.push(target);
            mapping.shift();
            continue;
        };
        
        // 맨 앞에 원소 꺼내서 뒤로 넣기
        mapping.shift(); 
        mapping.push(target);
    }
    

    for (let item in print) {
        if (print[item].origin === location) 
            return item * 1 + 1; //i는 index이므로 인쇄순서를 알기 위해서는 +1을 해줘야 함
    }
}

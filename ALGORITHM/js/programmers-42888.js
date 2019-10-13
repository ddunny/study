/** 
 * https://programmers.co.kr/learn/courses/30/lessons/42888?language=javascript
 * 
 * @ddunny
*/
function solution(record) {
    const action = {
        Enter: '들어왔습니다.',
        Leave: '나갔습니다.'
    }
    let user = new Map();
    let filtering_data = record.filter(item => {
        let value = item.split(' ');
        if (value[0] === 'Enter' || value[0] === 'Change') {
            user.set(value[1], value[2]);
        }
        if (value[0] !== 'Change') { return item };
    });

    return filtering_data.reduce((acc, current) => {
        let [command, uid] = current.split(' ');
        let message = `${user.get(uid)}님이 ${action[command]}`;
        acc.push(message);
        return acc;
    }, []);
}

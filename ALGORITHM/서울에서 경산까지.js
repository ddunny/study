function solution(K, travel) {
    let answer = 0;
    let time = 0;
    let cost = [];
    cost[0] = 0;
    let index = 1;
    
    for(let strict of travel) {
        let costIndex = (strict[1] > strict[3]) ? 1 : 3;
        
        if (time + strict[costIndex - 1] <= K) {
            cost[index - 1] = (index == 1) ? strict[costIndex] : strict[costIndex] + cost[index - 2];
            time += strict[costIndex - 1];
        } 
        else { 
            let idx = (costIndex == 1) ? 3 : 1;
            if(time + strict[idx - 1] <= K) {
                cost[index - 1] = strict[idx] + cost[index - 2];
                time += strict[idx - 1];
            }
            answer = cost[index-1];
            break;
        }
        index++;
    }
    return answer;
}
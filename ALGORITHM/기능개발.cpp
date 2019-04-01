/*
* queue 사용한 것으로 코드 수정 (선호풀이 참고)
* 기능개발
* https://programmers.co.kr/learn/courses/30/lessons/42586
*
*
* @ddunny
*/

#include <string>
#include <vector>
#include <queue>

using namespace std;

vector<int> solution(vector<int> progresses, vector<int> speeds) {
    vector<int> answer;
    queue<int> setting;

    for (int i = 0;  i < progresses.size(); i++) {
        int remain_work = (100  - progresses.at(i)) / speeds.at(i);
        int remain_work2 = (100  - progresses.at(i)) % speeds.at(i);
        
        if (remain_work2) // 남은 업무가 있는 경우
            remain_work += 1;
        
        setting.push(remain_work);
    }
    
    while(!setting.empty()) {
        int front_work = setting.front();
        setting.pop();
        int count = 1;
        while(!setting.empty()) {
            int next_work  = setting.front();
            if (front_work < next_work) 
                break;
            count += 1;
            setting.pop();
        }
        answer.push_back(count);
    }
    return answer;
}
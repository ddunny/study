/*
* https://programmers.co.kr/learn/courses/30/lessons/42586
*
* 기능개발
*
* 생각해 볼 사항
* 1. 스택/큐 풀이로 아래가 옳은 것인가?
*
* @ddunny
*/

#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<int> progresses, vector<int> speeds) {
    vector<int> answer, count_time, setting;
    
    for (int i = 0; i < progresses.size() ; i++) {
        setting.push_back(100 - progresses.at(i));
        count_time.push_back(0);
    }
    
    bool isend = false;
    int checkend = 0;
    while(!isend) {
        for (int i = 0; i < progresses.size() ; i++) {
            if (progresses.at(i) == -1) {
                continue;
            }
            
            int leftvalue = setting.at(i) - speeds.at(i);
            if (leftvalue >= 0) { // 잔여업무가 있음
                 count_time.at(i) += 1;
                if (leftvalue == 0) { // 완료
                    progresses.at(i) = -1;
                    checkend++;
                } else {
                    setting.at(i) = leftvalue;
                }
            } else {
                if (setting.at(i) > 0) { // 잔여진도가 speeds보다 적은 경우 (완료)
                    count_time.at(i) += 1;
                    progresses.at(i) = -1;
                    checkend++;
                }
            }
            
            if (checkend == progresses.size()) {
                isend = true;
                break;
            }
        }
    }
    
    int max = 0;
    int count_release = 1;
    for (int i = 0; i < progresses.size() ; i++) {
        if (i == 0) {
            answer.push_back(count_release);
            max = count_time.at(i);
            continue;
        }

        if (max < count_time.at(i)) {
            count_release = 1;
            max = count_time.at(i);
            answer.push_back(count_release);
        } else {
            count_release++;
            answer.at(answer.size() - 1) = count_release;
        }
    }
    
    return answer;
}
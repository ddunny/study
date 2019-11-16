/*
* 주식 가격
* https://programmers.co.kr/learn/courses/30/lessons/42584
*
* 고려해야 할 사항
* 1. 효율성 테스트 통과를 위해 for문을 최대한 조금만 돌도록 하기
* 
* @ddunny
*/

#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<int> prices) {
    vector<int> answer;

    /*
    //효율성 테스트에서 통과하지 못하는 풀이
    vector<int> drop;
    for (int i = 0 ; i < prices.size() ; i++) {
        if (answer.size() <= i) {
            answer.push_back(0);
            drop.push_back(0);
        }
        
        if (i == 0)
            continue;

        for (int j = 0 ; j < i; j++) {
            if (drop.at(j))
                continue;
            answer.at(j) += 1;
            if (prices.at(j) > prices.at(i)) {
                drop.at(j) = 1;
            }
        }
    }
    */
    
    for (int start = 0 ; start < prices.size() - 1 ; start++) {
        answer.push_back(0);
        for (int end = start + 1 ; end < prices.size() ; end++) {
             answer.at(start) += 1;
            if (prices.at(start) > prices.at(end)) {
                break;
            }
        }
    }

    answer.push_back(0);
    return answer;
}
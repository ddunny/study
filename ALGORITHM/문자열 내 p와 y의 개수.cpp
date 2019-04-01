/*
* 문자열 내 p와 y의 개수
* https://programmers.co.kr/learn/courses/30/lessons/12916
*
*
* @ddunny
*/
#include <string>
#include <iostream>
using namespace std;

bool solution(string s) {
    bool answer = true;
    int count_p = 0;
    int count_y = 0;
    
    for (int i = 0 ; i < s.size(); i++) {
        char item = tolower(s[i]); 
        // 입력되는 값이 대문자일 수도 있고, 소문자일 수도 있으니 일괄적으로 소문자로 변경하여 비교가 용이하도록 함
        // 카운팅할 때 대/소문자는 구분하지 않는다고 했음
        if (item != 'p' && item != 'y') // 변경한 값이 p도, y도 아니면 카운팅할 필요가 없음
            continue;
        
        if (item == 'p') {
            count_p += 1;
        } else {
            count_y += 1;
        }
    }

    if (count_p != count_y) { // p와 y의 개수가 다르면 false를 출력
        answer = false;
    }

    // p나 y가 하나도 없는 경우도 true를 리턴하면 되므로 answer 값을 따로 변경할 필요는 없음
    
    return answer;
}
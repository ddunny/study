/*
* https://programmers.co.kr/learn/courses/30/lessons/12930
*
* 이상한 문자 만들기
*
* @ddunny
*/
#include <string>
#include <vector>

using namespace std;

string solution(string s) {
    string answer = "";
    string temp = "";
    int count = 0;
    
    for (int i = 0; i < s.size(); i++) {
        if (s.at(i) == ' ') // 해당하는 위치가 공백이라면 count를 초기화한다. 1부터인 이유는 공백의 다음 순번이 2로 나누어 떨어져야 하기 때문이다.
            count = 1;
        
        temp = (count % 2 == 0) ? toupper(s[i]) : tolower(s[i]); // 처음 시작은 무조건 대문자
        count++; // 홀.짝.홀.짝 구분을 위해 사용하는 값
        answer += temp; //temp에 소문자/대문자로 만든 문자를 넣고 answer에 잇는다.
    }
    
    return answer;
}
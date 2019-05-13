/*
* 타겟 넘버
* https://programmers.co.kr/learn/courses/30/lessons/43165
*
* 생각해 볼 사항
* 1.
* 테스트 1 〉	통과 (58.25ms, 3.77MB)
* 테스트 2 〉	통과 (58.36ms, 3.89MB)
* 이렇게 시간이 걸리는게 맞는걸까
*
* 2. 전역변수는 쓰지 않아야 하는 것인가?
* @ddunny
*/

#include <string>
#include <vector>

using namespace std;
int result = 0;

/*
* 파라미터 
* list : 숫자가 담긴 배열
* idx : 탐색해야 할 위치
* sum : 누적된 계산값
* tgt : 타겟 넘버 
*/
void calculate(vector<int> list, int idx, int sum, int tgt) {
    if (idx == list.size()) { 
        // list의 인덱스틑 0부터 시작하므로, list.size()와 idx 값이 같다는 것은 주어진 list의 계산이 모두 끝났다는 의미이다.
        // 완료된 계산값이 타겟 넘버와 같은지 확인하고 같으면 반환해야하는 result 값을 +1 시킨다. 
        // 완료된 계산값이 타겟넘버와 같든 다르든 계산은 마친 것이므로 return으로 재귀에서 빠져나온다.
        if (sum == tgt)
            result++;
        return;
    } 
    
    // idx 가 list.size() 보다 작은 경우에 아래 작업을 수행한다.
    
    int value = list.at(idx);
    //sum += value; //해당 값을 더해본다.
    //idx++; //다음 값을 탐색해보아야 하므로 idx를 +1 해준다.
    calculate(list, idx + 1, sum + value, tgt);

    /*더하는 작업을 테스트 마쳤으니 원상복귀 start*/
    // sum -= value;
    // idx--; 
    /*더하는 작업을 테스트 마쳤으니 원상복귀 end*/
    

    //sum -= value; //해당 값을 빼본다.
    //idx++; //다음 값을 탐색해보아야 하므로 idx를 +1 해준다.
    calculate(list, idx + 1, sum - value, tgt);
}

int solution(vector<int> numbers, int target) {
    calculate(numbers, 0, 0, target);
    return result;
}
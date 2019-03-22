/*
* https://programmers.co.kr/learn/courses/30/lessons/43162
*
* 네트워크
*
* @ddunny
*/
#include <string>
#include <vector>

using namespace std;
int visit[200] = { 0 , };
vector<vector<int>>  copy_com;

void dfs(vector<int> computers) {
    for (int i = 0; i < computers.size() ; i++) {
        if (visit[i]) //이미 이전에 탐색을 했던 곳이라면 연결 탐색하지 않는다.
            continue;
        if (computers.at(i)) { //네트워크 연결된 것
            //  다음 연결된 것을 찾아본다.
            visit[i] = true;
            dfs(copy_com.at(i));
        }
    }
}

int solution(int n, vector<vector<int>> computers) {
    int answer = 0;
    copy_com = computers;
    for (int i = 0; i < computers.size() ; i++) {
        if (!visit[i]) {
            visit[i] = true;
            dfs(computers.at(i)); //연결된 컴퓨터로 이동하여, 또 다른 연결된 컴퓨터가 있는지 확인해봐야 한다.
            answer++; //연결 확인하는 작업이 끝났으므로, 하나의 네크워크가 생성된 것으로 확인한다.
            // 연결을 확인하는 작업: 연결여부를 떠나서 무조건 컴퓨터를 탐색하므로, 커넥션이 없어도 answer은 카운팅 +1 된다.
        }
    }
    return answer;
}
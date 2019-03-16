/*
* https://programmers.co.kr/learn/courses/30/lessons/43162
*
* 네트워크
* 
** 특이사항 . 아래 코드는 테스트에 통과하지 못한 코드임
*
* 테스트 1 〉	통과 (0.03ms, 3.78MB)
* 테스트 2 〉	통과 (0.06ms, 3.95MB)
* 테스트 3 〉	실패 (0.06ms, 3.83MB)
* 테스트 4 〉	실패 (0.06ms, 3.93MB)
* 테스트 5 〉	통과 (0.02ms, 3.77MB)
* 테스트 6 〉	통과 (0.05ms, 3.94MB)
* 테스트 7 〉	실패 (0.06ms, 3.78MB)
* 테스트 8 〉	실패 (0.07ms, 3.85MB)
* 테스트 9 〉	실패 (0.07ms, 3.88MB)
* 테스트 10 〉	실패 (0.09ms, 3.86MB)
* 테스트 11 〉	통과 (0.07ms, 3.95MB)
* 테스트 12 〉	통과 (0.07ms, 3.96MB)
* 테스트 13 〉	실패 (0.08ms, 3.91MB)
*
* @ddunny
*/
#include <string>
#include <vector>
#include <iostream>

using namespace std;
int visit[200][200] = { 0 , };

int solution(int n, vector<vector<int>> computers) {
    int network = 0;
    network = computers.size();
    for (int i = 0; i < computers.size() ; i++) {
        for (int j = 0; j < computers.size() ; j++) {
             if (i == j) { visit[i][j] = 1; }
            if (visit[i][j]) { //이미 점검이 완료된 곳이라면 더이상 탐색하지 않는다.
                break;
            }
            
            if (computers.at(i).at(j)) { //연결된 곳이라면 
                visit[i][j] = 1;
                visit[j][i] = 1;
                network -= 1; // 네트워크가 연결된 것이므로 1개를 감소시킨다.
                if (network == 1) { // 이미 다 하나로 연결되었으므로 더이상 돌지 않는다.
                    break;
                }
            }
        }
        if (network == 1) { // 이미 다 하나로 연결되었으므로 더이상 돌지 않는다.
            break;
        }
    }
    cout << "network: " << network << endl;
    return network;
}
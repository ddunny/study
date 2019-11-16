/*
* 보행자 천국 DP
* https://programmers.co.kr/learn/courses/30/lessons/1832
*
* @ddunny
*/
#include <vector>
#include <cstring>
using namespace std;

int MOD = 20170805;

int right[501][501]; //오른쪽으로 갈 수있는 경우의 수
int bottom[501][501]; // 아래쪽으로 갈 수있는 경우의 수

// 전역 변수를 정의할 경우 함수 내에 초기화 코드를 꼭 작성해주세요.
int solution(int m, int n, vector<vector<int>> city_map) {
    // memset() : 초기화 작업
    memset(right, 0, sizeof right); 
    memset(bottom, 0, sizeof bottom);
    right[1][1] = bottom[1][1] = 1;
    
    for (int i = 1; i <= m; i++) {   
        for (int j = 1; j <= n; j++) {
            if (i == 1 && j == 1) { // 위에서 이미 값 할당 마쳤기 때문에 보지 않음
                continue;
            }
            if (city_map[i-1][j-1] == 0) {
                right[i][j] = (right[i][j-1] + bottom[i-1][j]) % MOD;
                bottom[i][j] = (right[i][j-1] + bottom[i-1][j]) % MOD;
            }
            else if (city_map[i-1][j-1] == 1) {
                right[i][j] = 0;
                bottom[i][j] = 0; 
            }
            else {
                right[i][j] = right[i][j-1];
                bottom[i][j] = bottom[i-1][j];                                
            }
        }
    }
    
    return (right[m][n-1] + bottom[m-1][n]) % MOD;
}
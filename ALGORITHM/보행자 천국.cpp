#include <vector>
#include <iostream>
using namespace std;

#define EMPTY 0 
#define BLOCK 1
#define ONELINE 2

int MOD = 20170805;
int dir[2][2] = { {0, 1},{1, 0} };
int visit[500][500] = { 0, };
int result = 0;

void DFS(int nowy, int nowx, int m, int n, vector<vector<int>> city_map, int beforedir) {
	if (nowy == m - 1 && nowx == n - 1) {
		result += 1;
		result %= MOD;
		return;
	}

	if (nowy < 0 || nowx < 0 || nowy >= m || nowx >= n || visit[nowy][nowx] == 1 || city_map[nowy][nowx] == BLOCK) { // 못가는경우 
		return;
	}

	visit[nowy][nowx] = 1;

	int nexty, nextx;

	if (city_map[nowy][nowx] == ONELINE) {
		nexty = nowy + dir[beforedir][0];
		nextx = nowx + dir[beforedir][1];
		DFS(nexty, nextx, m, n, city_map, beforedir);
		visit[nexty][nextx] = 0;
	}
	else { // EMPTY
		for (int i = 0; i < 2; i++) {
			nexty = nowy + dir[i][0];
			nextx = nowx + dir[i][1];
			DFS(nexty, nextx, m, n, city_map, beforedir);
			visit[nexty][nextx] = 0;
		}
	}
}

// 전역 변수를 정의할 경우 함수 내에 초기화 코드를 꼭 작성해주세요.
int solution(int m, int n, vector<vector<int>> city_map) {
	DFS(0, 0, m, n, city_map, 0); // 무조건 0, 0 부터 시작한다.
	return result;
}
/*
* 단지번호붙이기
* https://www.acmicpc.net/problem/2667
*
*
* @ddunny
*/

#include <iostream>
#include <algorithm> // for using sort
#include <vector> 
using namespace std;

#define HOME '1' // 1은 집이 있는 곳

int N;
char map[26][26]; // 0 또는 1로 입력되는 자료
int visit[26][26] = { 0, }; // 방문했는지
int count_home = 0; // 집 수 카운트
int dir[4][2] = { {1,0}, {-1,0}, {0,1}, {0,-1} }; // up, down, left, right check

struct position {
	int y, x;
};


void DFS(position pos) {
	int nexty, nextx;
	
	visit[pos.y][pos.x] = 1; // 현재 위치 방문했고
	count_home++;// 집 개수 카운트 하고

	for (int i = 0; i < 4; i++) {
		nexty = pos.y + dir[i][0];
		nextx = pos.x + dir[i][1];
		if (map[nexty][nextx] == HOME && !visit[nexty][nextx] && pos.y < N && 0 <= pos.y && pos.x < N && 0 <= pos.x) { 
			// 집이고, 아직 방문한 곳이고, 범위를 벗어나지 않았다면
			DFS({ nexty, nextx });
		}
	}
}

int main(void) {
	vector<int> count_town;
	cin >> N;

	int result = 0;
	for (int i = 0; i < N; i++) {
		cin >> map[i];
	}

	for (int i = 0; i < N; i++) {
		for (int j = 0; j < N; j++) {
			if (!visit[i][j] && map[i][j] == HOME) { // 집이 있는 곳이면
				DFS({ i, j });
				// 위 DFS 작업이 끝난 경우 아래 실행
				count_town.push_back(count_home); // 집계된 count_home 은 한 단지가 된다.
				if (count_home > 0) { // count_home 이 존재하는 경우 result++ (첫번째줄에 총 단지수를 출력해야 하므로)
					result++;
				}
				count_home = 0;
			}
		}
	}

	cout << result << endl;
	sort(count_town.begin(), count_town.end()); // 오름차순으로 정렬 

	for (int i = 0, town_size = count_town.size(); i < town_size; i++) { // 마을크기 출력
		cout << count_town.at(i) << endl;
	}

	return 0;
}
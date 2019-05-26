
/*
* 섬의 개수
* https://www.acmicpc.net/problem/4963
*
* 고려해야 할 사항
* 주어진 테스트 케이스, 질문 검색 내 일부 테스트케이스들 테스트 해봤으나 모두 정담... 왜 틀린지 모르겠음.....
* @ddunny
*/
#include <iostream>
#include <stack>
#include <string.h>
using namespace std;

#define SEA 0
#define LAND 1
#define VISIT 0

int w, h;
int map[55][55];
int dir[8][2] = { {0,1}, {1,0}, {1,1},{-1, 1},{-1 ,0}, {-1, 1}, {-1,-1}, {0, -1} };
int result = 0;

struct position
{
	int y, x;
};

stack<position> stacks;

void dfs(position stt) { // 섬의 개수 세기
	// 정사각형과 가로, 세로 또는 대각선으로 연결되어 있는 사각형은 걸어갈 수 있는 사각형이다. 
	stacks.push(stt);

	position now;
	position next;
	while (!stacks.empty()) {
		now = stacks.top();
		stacks.pop();

		for (int i = 0; i < 8; i++) {
			next.y = now.y + dir[i][0];
			next.x = now.x + dir[i][1];
			//cout << "now map[" << now.y << "][" << now.x << "] : " << map[now.y][now.x] << endl;
			//cout << "next map[" << next.y << "][" << next.x << "] : " << map[next.y][next.x] << endl;
			if (map[next.y][next.x] == LAND && next.y < h && next.x < w && 0 <= next.y && 0 <= next.x) {
				//cout << "next is land" << endl;
				map[next.y][next.x] = VISIT;
				stacks.push(next);
			}
		}
		//cout << "======" << endl;
	}
	result++;
	//cout << "in DFS result is " << result << endl;
}

int main() {
	//int count = 0;
	while (1) {
		memset(map, 0, sizeof(map));
		cin >> w >> h;
		if (w == 0 && h == 0)
			break;

		for (int i = 0; i < h; i++) {
			for (int j = 0; j < w; j++) {
				cin >> map[i][j];
			}
		}

		for (int i = 0; i < h; i++) {
			for (int j = 0; j < w; j++) {
				if (map[j][i] == LAND) {
					map[j][i] = VISIT;
					//cout << "j is " << j << " i is " << i << endl;
					dfs({ j, i });
				}
			}
		}
		cout << result << endl;
		//cout << "result: " << result << endl;
		result = 0;
		//cout << "turn count: " << ++count << "==========================" << endl;
	}
	return 0;
}

/*
* 섬의 개수
* https://www.acmicpc.net/problem/4963
*
* 고려해야 할 사항
* 주어진 테스트 케이스, 질문 검색 내 일부 테스트케이스들 테스트 해봤으나 모두 정담... 왜 틀린지 모르겠음.....
*
* 틀렸던 이유
* 1. dir 1개를 누락하고, 중복으로 두었음
* 2. dfs 들어가는 값의 x, y 좌표를 반대로 함
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
int map[51][51];
int dir[8][2] = { {0, 1}, {1, 0}, {1, 1},{-1, 1},{-1 ,0}, {1, -1}, {-1,-1}, {0, -1} };
int result = 0;

struct position {
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
			if (map[next.y][next.x] == LAND && next.y < h && next.x < w && 0 <= next.y && 0 <= next.x) {
				map[next.y][next.x] = VISIT;
				stacks.push(next);
			}
		}
	}
	result++; // 스택을 다 비우고 카운팅 -> 이어져 있는 곳 체킹이 끝난 것.
}

int main() {
	while (1) {
		cin >> w >> h;
		if (w == 0 && h == 0) // 0, 0 이 들어오면 입력 끝내기 
			break;

		for (int i = 0; i < h; i++) {
			for (int j = 0; j < w; j++) {
				cin >> map[i][j];
			}
		}

		for (int i = 0; i < h; i++) {
			for (int j = 0; j < w; j++) {
				if (map[i][j] == LAND) {
					map[i][j] = VISIT;
					dfs({ i, j });
				}
			}
		}
		cout << result << endl;
		memset(map, 0, sizeof(map)); // 지도 0으로 초기화
		result = 0; //초기화 
	}
	return 0;
}
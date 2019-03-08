/*
* 토마토 BFS
* https://www.acmicpc.net/problem/7576
*
* 고려해야 할 사항
* 1. 이미 모두 익었을 경우
* 2. 모두 익을 수 없는 경우
* 3. 익은 것들의 상하좌우로 익으며, 이미 익은 것들은 익을 시간이 따로 필요하지 않으므로 걸리는 시간은 0
* 
* @ddunny
*/

#include <iostream>
#include <queue>
using namespace std;

#define COMPLETE 1
#define COMMON 0
#define EMPTY -1
#define MAX_SIZE 1001

int box[MAX_SIZE][MAX_SIZE];
int visit[MAX_SIZE][MAX_SIZE] = { 0, };
int dir[4][2] = { {0, 1}, {1, 0}, {0, -1}, {-1, 0} };
int M, N;
int tomato = 0;
int complete = 0;

struct position {
	int y, x;
};

queue<position> path;

int BFS() {
	position now;

	while (1) {
		now.y = path.front().y;
		now.x = path.front().x;
		path.pop();

		int nexty, nextx;
		for (int i = 0; i < 4; i++) {
			nexty = now.y + dir[i][0];
			nextx = now.x + dir[i][1];
			if (nexty < N && 0 <= nexty && nextx < M && 0 <= nextx && visit[nexty][nextx] == 0 && box[nexty][nextx] == COMMON) {
				visit[nexty][nextx] = visit[now.y][now.x] + 1;
				complete += 1;
				path.push({ nexty, nextx });
			}
		}

		if (path.empty()) {
			return visit[now.y][now.x];
		}
	}
}

int main(void) {
	cin >> M >> N;
	bool check_tomato = false;
	for (int i = 0; i < N; i++) {
		for (int j = 0; j < M; j++) {
			cin >> box[i][j];
			if (box[i][j] == COMMON) {
				tomato += 1;
				if (!check_tomato) {
					check_tomato = true;
				}
			}
			else if (box[i][j] == COMPLETE) {
				path.push({ i, j });
			}
		}
	}

	if (!check_tomato) {
		cout << "0" << endl;
		return 0;
	}

	int output = 0;
	output = BFS();

	if (complete == tomato) {
		cout << output << endl;
	}
	else {
		cout << "-1" << endl;
	}
	 
	return 0;
}

/*
* 연구소 BFS, DFS
* https://www.acmicpc.net/problem/14502
*
* @ddunny
*/
#include <iostream>
#include <queue>

using namespace std;

//0은 빈 칸, 1은 벽, 2는 바이러스가 있는 위치
#define EMPTY 0
#define WALL 1
#define VIRUS 2
#define MAX_SIZE 8

int map[MAX_SIZE][MAX_SIZE];
int storeMap[MAX_SIZE][MAX_SIZE];
int visited[MAX_SIZE][MAX_SIZE];

struct position {
	int y, x;
};

queue<position> bugs;

int N, M; // 세로 N, 가로 M ||  3 ≤ N, M ≤ 8
int maxsecure = -1;
int secure = 0;

int dir[4][2] = { {1, 0}, {0, 1}, {-1, 0} ,{0, -1} };
/*
* 2의 개수는 2보다 크거나 같고, 10보다 작거나 같은 자연수 →  2<= 바이러스의 개수 <= 10
* 빈 칸의 개수는 3개 이상이다  → 빈 칸의 개수 = 0의 개수
*/

void copyMap() {
	for (int i = 0; i < N; i++) {
		for (int j = 0; j < M; j++) {
			storeMap[i][j] = map[i][j];
			if (storeMap[i][j] == VIRUS) {
				bugs.push({i, j});
			}
			visited[i][j] = 0;
		}
	}
	return;
}

void injectVirus() { // 바이러스를 퍼트리는 것 : BFS

	// 이 바이러스는 상하좌우로 인접한 빈 칸으로 모두 퍼져나갈 수 있다.

	copyMap(); //기존 맵을 망가뜨리지 않기 위해,  맵을 카피하여 바이러스를 퍼트려 봄

	while (!bugs.empty()) {
		int bugy = bugs.front().y;
		int bugx = bugs.front().x;

		bugs.pop();

		for (int i = 0; i < 4; i++) {
			int nexty, nextx;
			nexty = bugy + dir[i][0];
			nextx = bugx + dir[i][1];

			if (0 > nexty || nexty >= N || 0 > nextx || nextx >= M || visited[nexty][nextx] == 1) { //바이러스가 퍼질 수 없는 곳
				continue;
			}
			/*감염시킬 수 있음*/
			if (storeMap[nexty][nextx] == EMPTY) {
				storeMap[nexty][nextx] = VIRUS;
				secure--; //바이러스로 감염되었기 때문에 안전한 공간 개수 감소
				visited[nexty][nextx] = 1;
				bugs.push({ nexty, nextx });
			}
		}
	}
}

void setWall(int Y, int install) { // 벽을 세우는 방법: DFS

	// 새로 세울 수 있는 벽의 개수는 3개이며, 꼭 3개를 세워야 한다.

	if (install == 3) { //3개의 벽을 다 채웠을 경우
		int secure_temp = secure;
		injectVirus(); //바이러스를 퍼트려 보자

		if (maxsecure < secure) { // 얻을 수 있는 안전 영역의 최대 크기를 출력 → 매 케이스의 결과값을 비교해보아야 한다.
			maxsecure = secure;
		}
		secure = secure_temp;
		return;
	}

	for (int i = Y; i < N; i++) {
		for (int j = 0; j < M; j++) {
			if (map[i][j] == EMPTY) {
				map[i][j] = WALL; // 벽을 하나 세워봅니다.
				secure--; //빈 공간에 벽이 세워졌기 때문에 감소
				setWall(i, install + 1); //탐색할 i와 j를 보내고.. 벽은 윗줄에서 세웠으니깐, 1개 추가된 값으로 전달.
				map[i][j] = EMPTY; //세워봤던거 제거
				secure++; //벽이 사라진 공간은 다시 안전한 공간
			}
		}
	}
}

int main(void) {
	cin >> N >> M;
	for (int i = 0; i < N; i++) {
		for (int j = 0; j < M; j++) {
			cin >> map[i][j];
			if (map[i][j] == EMPTY) { //EMPTY의 개수를 따로 저장해두자.
				secure++;
			}
			
		}
	}

	setWall(0, 0);

	cout << maxsecure << endl;
	return 0;
}
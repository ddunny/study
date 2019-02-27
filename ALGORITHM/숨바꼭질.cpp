/*
* 숨바꼭질 BFS
* https://www.acmicpc.net/problem/1697
* 고려해야 할 사항
* 1. DFS로 풀면 스택오버 플로우 발생
* 2. BFS 자체가 최단거리를 측정하는 것이기 때문에, time에 저장되는 값은 최단시간임
* 3. 현재의 position에서 갈 수 있는 곳들을 다 측정하고, 큐에서 하나씩 빼서 나온 position에서 갈 수 있는 곳들을 측정하는 형태로 진행
* 
* @ddunny
*/
#include <iostream>
#include <queue>
using namespace std;

int N, K;
int visited[100001];

struct info {
	int time, position;
};

void BFS() {
	queue<info> q;
	q.push({0, N});
	visited[N]++;

	while (!q.empty()) {
		int cnt = q.front().time;
		int position = q.front().position;
		q.pop();

		if (position == K) {
			cout << cnt << endl;
			break;
		}

		if (position + 1 <= 100000 && !visited[position + 1]) {
			q.push({ cnt + 1, position + 1 });
			visited[position + 1]++;
		}

		if (position - 1 >= 0 && !visited[position - 1]) {
			q.push({ cnt + 1, position - 1 });
			visited[position - 1]++;
		}

		if (position * 2 <= 100000 && !visited[position * 2]) {
			q.push({ cnt + 1, position * 2 });
			visited[position * 2]++;
		}

	}

}
int main() {
	cin >> N >> K;
	BFS();
	return 0;
}

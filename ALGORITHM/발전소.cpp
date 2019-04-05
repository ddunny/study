/*

발전소
https://www.acmicpc.net/problem/1102

[TEST CASE]
3
0 10 11
10 0 12
12 13 0
YNN
3
---
21

*/
#include <iostream>
#include <queue>
#include <vector>
using namespace std;

int cost[16][16] = { 0, }; //cost[i][j] : 발전소 i를 이용해서 발전소 j를 재시작할 때 드는 비용
int machine[16] = { 0, };
int memo[16] = { 0, }; // 코스트 기록

vector<int> good;
queue<int> bad;

int main() {
	int N, P;
	cin >> N; //발전소의 개수 1 <= N < 16

	for (int i = 0; i < N; i++) {
		for (int j = 0; j < N; j++) {
			cin >> cost[i][j]; //발전소 i를 이용해서 발전소 j를 재시작할 때 드는 비용
		}
		memo[i] = 51; // 비용은 50보다 작거나 같은 음이 아닌 정수이므로, 최소값을 구해야 하므로, 나올 수 없는 최대값으로 초기설정을 해준다.
	}
	char input;
	for (int i = 0; i < N; i++) {  // 발전소가 켜져있으면 Y, 꺼져있으면 N
		cin >> input;
		if (input == 'Y') {
			machine[i] = 1;
			good.push_back(i);
		}
		else {
			machine[i] = -1;
			bad.push(i);
		}
	}

	cin >> P;  //적어도 P개의 발전소가 고장나 있지 않도록   // 0 <= P < N

	if (good.size() == 0) { //모두 고장난 경우에는 발전소를 고칠 수 없다.
		cout << "-1" << endl;
		return 0;
	}

	while (!bad.empty()) { //다 고쳐질 때까지 
		int needfix = bad.front();
		bool fixed = false;
		for (int i = 0, max = good.size(); i < max; i++) {
			int idx = good[i];
			if (cost[idx][needfix] == 0) { // 기기 자신을 의미함
				continue;
			}
			if (cost[idx][needfix] < memo[needfix]) {
				memo[needfix] = cost[idx][needfix];
			}
		}
		bad.pop();
		good.push_back(needfix);
	}

	int answer = 0;
	for (int i = 0; i < N; i++) {
		if (memo[i] == 0 || memo[i] == 51) {
			continue;
		}
		answer += memo[i];
	}

	cout << answer; //첫째 줄에 문제의 정답을 출력한다. 불가능한 경우에는 -1을 출력한다.

	return 0;
}

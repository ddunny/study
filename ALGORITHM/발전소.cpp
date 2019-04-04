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

	while (!bad.empty()) { //다 고쳐질 때까지 
		int needfix = bad.front();
		bool fixed = false;
		cout << "need fix: " << needfix << endl;
		for (int i = 0, max = good.size(); i < max; i++) {
			int idx = good[i];
			if (cost[idx][needfix] <= 0) { // 0이상이어야 비용이 드는 것이다
				continue;
			}
			if (memo[needfix] == 0) {
				memo[needfix] = cost[idx][needfix];
				
				if (i + 1 == max) { //마지막인 경우
					good.push_back(needfix); //고쳐진거 집어 넣기
					fixed = true;
					break;
				}
			}
			if (memo[needfix] > cost[idx][needfix]) {
				memo[needfix] = cost[idx][needfix];
				fixed = true;

			}
		}

		if (fixed == true) {
			fixed = false;
			bad.pop();
		}
	}

	int answer = 0;
	for (int i = 0; i < N; i++) {
		answer += memo[i];
	}
	
	cout << answer; //첫째 줄에 문제의 정답을 출력한다. 불가능한 경우에는 -1을 출력한다.

	return 0;
}
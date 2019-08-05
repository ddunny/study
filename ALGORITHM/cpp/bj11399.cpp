/*
* ATM
* https://www.acmicpc.net/problem/11399
*
* @ddunny
*/

#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<int> times;

int main() {
	int N;
	int timer = 0; // 개인마다 걸리는 시간 계산을 위한 변수
	int timers = 0; // 전체 걸리는 시간 계산을 위한 변수
	cin >> N;

	for (int i = 0; i < N; i++) {
		int input;
		cin >> input;
		times.push_back(input);
	}

	sort(times.begin(), times.end()); // 뒤로 갈수록 시간이 오래 걸리는 사람이 있어야 한다. (오름차순 정렬)

	for (int i = 0; i < N; i++) {
		timer += times[i];
		timers += timer;
	}

	cout << timers;

	return 0;
}
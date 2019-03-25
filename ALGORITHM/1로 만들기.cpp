/*
* 1로 만들기
* https://www.acmicpc.net/problem/1463
* 
* @ddunny
*/
#include <iostream>
#include <algorithm>

using namespace std;

int DP[1000001] = { 0, };

int main(void) {
	int n;
	int i;

	cin >> n;

	for (i = 2; i <= n; i++) {
		DP[i] = DP[i - 1] + 1;
		if (i % 2 == 0) {
			DP[i] = min(DP[i], DP[i / 2] + 1);
		}
		if (i % 3 == 0) {
			DP[i] = min(DP[i], DP[i / 3] + 1);
		}
	}

	cout << DP[n] << endl;

	return 0;
}
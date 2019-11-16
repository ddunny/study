/*
* 2×n 타일링 2
* https://www.acmicpc.net/problem/11727
*
* @ddunny
*/
#include <iostream>
using namespace std;

int memo[1001] = { 0, 1, 3, };

int dp(int n) {
	if (n <= 2) {
		return memo[n];
	}

	if (memo[n] > 0) {
		return memo[n];
	}

	// 2x1 사각형이 맨 끝인 경우 : dp(n - 1) 
	// 1x2 사각형이 맨 끝인 경우 : dp(n - 2)
	// 2x2 사각형이 맨 끝인 경우 : dp(n - 2)
	return memo[n] = (dp(n - 1) + dp(n - 2) + dp(n - 2)) % 10007;
}


int main() {
	int n;
	cin >> n;
	dp(n);
	cout << memo[n] << endl;
	return 0;
}
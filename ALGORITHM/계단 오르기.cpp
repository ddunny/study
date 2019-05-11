/*
* 계단 오르기
* https://www.acmicpc.net/problem/2579
*
* 고려해야 할 사항
* 1. 마지막 단계를 밟았을 경우 , 이전의 경우를 2가지로 생각하기 (마지막은 무조건 밟는다는 문제의 조건에 따라.)
*  1-1. 마지막 계단(n) 전의 계단을 밟은 경우
*       - 전전계단(n-2)은 밟지 않고, 그 전 단계(n-3)에서 넘어왔다
*  1-2. 마지막 계단(n) 전의 계단을 밟지 않은 경우
*       - 전전계단을(n-2) 밟음
* @ddunny
*/
#include <iostream>
using namespace std;

int stair[301] = { 0, };
int memo[301] = { 0, };

int max(int a, int b) {
	return (a >= b) ? a : b;
}

int dp(int n) { // n : 마지막 계단
	if (n <= 1) {
		return memo[n];
	}

	if (n == 2) {
		return memo[n] = max(stair[n], stair[n - 1] + stair[n]); //2번째 칸에는 메모를 체크할 게 없음 (전전계단이 없음)
	}

	if (memo[n] > 0) { //없으면 시간초과
		return memo[n];
	}
	return memo[n] = max(dp(n - 2) + stair[n], dp(n - 3) + stair[n - 1] + stair[n]);
}

int main() {
	int N;
	cin >> N;
	for (int i = 1; i <= N; i++) {
		cin >> stair[i];
		if (i == 1)
			memo[i] = stair[i];
	}

	dp(N);

	cout << memo[N];
	return 0;
}
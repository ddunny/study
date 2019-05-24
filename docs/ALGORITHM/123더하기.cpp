/*
* 1, 2, 3 더하기
* https://www.acmicpc.net/problem/9095
*
* 생각해 볼 사항
* 1. 점화식 빠르게 생각하는 방법...
*  - 일일이 케이스를 적어봤는데, 이 방법밖에 없는걸까? 점화식이 세웠는데 잘못 세운 경우도 발생했었음
* @ddunny
*/
#include <iostream>
using namespace std;

int memo[12] = { 0, 1, 2, 4, }; //숫자대로 하려고 0번째 인덱스는 0으로 값 넣어주고 1부터 시작함

int dp(int n) {
	if (n <= 3) { //0, 1, 2, 3
		return memo[n];
	}
	if (memo[n] > 0) { //이것도 피보나치 함수처럼 초기화가 필요하지 않음. 쭉쭉 누적임
		return memo[n];
	}

	return memo[n] = dp(n - 1) + dp(n - 2) + dp (n - 3);
}

int main(void) {
	int N, T;
	cin >> T;

	for (int i = 0; i < T; i++) {
		cin >> N;

		if (N == 1) {
			cout << "1" << endl;
		}
		else if (N == 2) {
			cout << "2" << endl;
		}
		else if (N == 3) {
			cout << "4" << endl;
		}
		else {
			dp(N);
			cout << memo[N] << endl;
		}
	}

	return 0;
}
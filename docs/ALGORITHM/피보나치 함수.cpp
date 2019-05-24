/*
* 피보나치 함수
* https://www.acmicpc.net/problem/1003
*
* @ddunny
*/
#include <iostream>
#include <vector>
//#include <cstring> //memset 쓸 때 필요
using namespace std;

int answer;

int memo[41] = { 1,1, }; //40으로 하면 에러남

int fibonacci(int num) {
	if (num <= 1) {
		return memo[num];
	}
	else {
		if (memo[num] > 0) {
			return memo[num];
		}
	}
	return memo[num] = fibonacci(num - 1) + fibonacci(num - 2);
}

int main(void) {
	int T, N;
	cin >> T;

	for (int i = 0; i < T; i++) {
		cin >> N;

		if (N == 0) {
			cout << "1 0" << endl;
		}
		else if (N == 1) {
			cout << "0 1" << endl;
		}
		else {
			//memset(memo, 0, sizeof(memo)); // 어차피 피보나치 증가하는 거 기록해둔대로 모든 숫자가 일치하기 때문에(설명이 좀 이상한데..) 초기화 작업이 필요없는 것! 
			//memo[0] = 1;
			//memo[1] = 1;
			fibonacci(N);
			cout << memo[N - 2] << " " << memo[N - 1] << endl;
		}
	}
	return 0;
}
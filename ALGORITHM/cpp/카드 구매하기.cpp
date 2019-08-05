/*
* 카드 구매하기
* https://programmers.co.kr/learn/courses/30/lessons/11052
*
* 개선하면 좋을 사항
* 1. for문 중복 경우 처리 안하도록 
* 
* @ddunny
*/
#include <iostream>
#include <algorithm>
using namespace std;

int P[10001]; // 0은 안쓰고 1부터 사용할 것임
int dp[1001];
int main() {
	int N;
	cin >> N;
	for (int i = 1; i <= N; i++) {
		cin >> P[i];
		dp[i] = P[i]; // 디폴트 값으로 모두 최대값 세팅
	}
	for (int i = 2; i <= N; i++) {
		for (int j = 1; j < i; j++) {
			dp[i] = max(dp[i - j] + dp[j], dp[i]); 
			/*
			i = 2
			dp[2] = max(dp[1] + dp[1], dp[2])

			i = 3
			dp[3] = max(dp[2] + dp[1], dp[3])
			dp[3] = max(dp[1] + dp[2], dp[3]) // 이건 체크 안하는게 효율적인디..

			i = 4
			dp[4] = max(dp[3] + dp[1], dp[4])
			dp[4] = max(dp[2] + dp[2], dp[4])
			dp[4] = max(dp[1] + dp[3], dp[4]) // 이건 체크 안하는게 효율적인디..
			*/
		}
	}
	cout << dp[N];
	return 0;
}
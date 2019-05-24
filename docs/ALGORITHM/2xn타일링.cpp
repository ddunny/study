/*
* 2xn타일링
* https://www.acmicpc.net/problem/11726
*
* 학습에 참고한 영상
* https://www.youtube.com/watch?v=HTgcW34AnVQ
*
* @ddunny
*/
#include <iostream>
using namespace std;

int memo[1001] = { 0,1,2, };

int main() {
	int N;
	cin >> N;

	for (int i = 3; i <= 1000; i++) {
		memo[i] = (memo[i - 1] + memo[i - 2]) % 10007;
	}

	cout << memo[N] << endl;

	return 0;
}
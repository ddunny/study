/*
* 팰린드롬인지 확인하기
* https://www.acmicpc.net/problem/10988
*
* @ddunny
*/
#include <iostream>
#include <string>

using namespace std;

int check(string s) {
	string reverse = "";

	for (int i = s.size() -1; i >= 0; i--) { //역으로 만드는 과정
		reverse += s[i];
	}

	if (reverse == s) { //역으로 했을 때와 원래의 모습이 같은 경우
		return 1;
	}
	else { //다른 경우
		return 0;
	}
}

int main(void) {
	string input;
	cin >> input;

	cout << check(input);

	return 0;
}
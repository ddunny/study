/*
* 단어 공부
* https://www.acmicpc.net/problem/1157
*
* 고려해야 할 사항
* 1. 아스키코드 이용
*	대문자 A~Z : 65~90 임
*   -65를 해서 0~25의 인덱스를 가지를 배열을 생성하여 포함되는 알파벳의 개수를 센다.
*
* @ddunny
*/

#include <iostream>
#include <string>

using namespace std;

int main(void) {
	string input;
	char answer = '?';
	int cnt[26] = { 0, };

	cin >> input;

	for (int i = 0; i < input.size(); i++) {
		char item = toupper(input[i]); // 대소문자 섞여 있으므로 하나로 통일해준다. // 대문자로 결과를 출력해야 하므로 모두 대문자로 바꾸어 생각했다.
		int ascii = item;
		cnt[ascii - 65] += 1; // 나온 알파벳은 카운팅해준다.
	}

	int max = 0;
	int max_index = 0;
	for (int i = 0; i < 26; i++) {
		if (cnt[i] == 0) // 0인 경우는 포함되지 않은 알파벳이므로 다음 연산은 할 필요가 없음
			continue;

		if (cnt[i] > max) {
			max = cnt[i];
			max_index = i;
		} 
	}

	int duplicate = 0;
	for (int i = 0; i < 26; i++) {
		if (duplicate == 2) { // 가장 많이 사용한 알파벳이 1개가 아닌 경우에는 ?를 출력하므로 더이상 for문을 돌 필요가 없음
			break;
		}

		if (cnt[i] == 0) {
			continue;
		}
			
		if (max == cnt[i]) { // 중복인 경우가 나타나면 duplicate 카운팅해준다.
			duplicate += 1;
		}
	}

	if (duplicate != 2) { //중복되는 없는 경우에 알파벳을 출력한다.
		answer = max_index + 65;
	}

	cout << answer << endl;

	return 0;
}
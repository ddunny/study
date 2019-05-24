/*
* 일곱 난쟁이 완전탐색
* https://www.acmicpc.net/problem/2309
* 
* 고려해야 할 사항
* 1. 난쟁이는 무조건 7명이고, 그들의 키의 합은 100이고, 가능한 정답이 여러 가지인 경우에는 아무거나 출력한다. → 기저 조건 설정
* 2. 오름차순으로 출력 → 알고리즘의 sort() 이용
* @ddunny
*/

#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int arr[9] = { 0, };

vector<int> persons;
int result = 0;
bool endvalue = false;

void search(int person) {
	if (result == 100 && persons.size() == 7) { //합이 100 이고 사이즈가 7이면 끝난다.
		endvalue = true; // 정답
		return;
	}

	if (100 <= result) { //100보다 크면 더 볼 필요도 없음
		return;
	}

	if (persons.size() == 7) { //7명이 꽉 찼는데 100이 안되는 상황도 더 볼 필요 없음
		return;
	}

	if (person + 1 == 9) { //참조할 게 없음
		return;
	}

	for (int i = person + 1; i < 9; i++) {
		if (result + arr[i] > 100) {
			continue;
		}
		persons.push_back(arr[i]);
		result += arr[i];
		search(i);
		if (endvalue) {
			break;
		}
		persons.pop_back();
		result -= arr[i];
	}
}


int main(void) {
	for (int i = 0; i < 9; i++) {
		cin >> arr[i];
	}

	for (int i = 0; i < 9; i++) {
		persons.push_back(arr[i]);
		result += arr[i];
		search(i);
		if (endvalue) {
			break;
		}
		persons.pop_back();
		result -= arr[i];
	}
	sort(persons.begin(), persons.end()); //오름차순으로 출력
	
	for (int i = 0; i < persons.size(); i++) {
		cout << persons.at(i) << endl;
	}

	return 0;
}
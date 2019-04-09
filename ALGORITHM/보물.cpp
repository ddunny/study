/*
* 보물
* https://www.acmicpc.net/problem/1026
*
* @ddunny
*/
#include <iostream>
#include <algorithm>
using namespace std;

int A[50] = { 0, };
int B[50] = { 0, };
int temp[50] = { 0, }; // B 배열은 건들지 말라고 해서 B를 복사할 배열을 생성함

bool compare(int a, int b) {
	return a > b;
}

int main() {
	int N; // 첫째 줄에 N이 주어진다
	int answer = 0;

	cin >> N;
	// 둘째 줄에는 A에 있는 N개의 수가 순서대로 주어지고
	// 0 < N <= 50
	for (int i= 0; i < N; i++) {
		cin >> A[i];
	}
	for (int i = 0; i < N; i++) {
		cin >> B[i];
		temp[i] = B[i]; // B 배열은 건들이면 안되니깐 temp에 복사
	}

	//S의 값을 가장 작게 만들기 위해 A의 수를 재배열하자. 단, B에 있는 수는 재배열하면 안된다.
	sort(A, A + N);
	sort(temp, temp + N, compare);

	for (int i = 0; i < N; i++) {
		answer = answer + A[i]*temp[i];
	}
	cout << answer;
	return 0;
}
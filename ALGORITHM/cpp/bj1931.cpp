
/*
* 회의실배정
* https://www.acmicpc.net/problem/1931
*
* 특이사항 
* 1. 문제에서 주어지는 회의시간은 반드시 순서대로 주어지는 것이 아님 -> 1차 정렬이 필요함
* @ddunny
*/

#include <iostream>
#include <queue>
#include <algorithm> // 없이 사용하면 sort() 컴파일 에러 발생
using namespace std;

struct meeting {
	int start, end;
};

vector<meeting> meetings; // 탐색을 위해 vector로 변경
queue<meeting> complete;

bool sortingEnd(meeting& a, meeting& b) {
	if (a.end == b.end)
		return a.start < b.start;

	return a.end < b.end;
}

int greed() {
	int size = meetings.size();
	sort(meetings.begin(), meetings.end(), sortingEnd);

	int now = 0; 
	int next = 1;
	complete.push(meetings[now]);
	 
	while (next < size) {
		if (meetings[now].end <= meetings[next].start) {
			complete.push(meetings[next]);
			now = next;
		}
		next++;
	}
	return complete.size();
}

int main() {
	int N;
	int start, end;
	cin >> N;
	for (int i = 0; i < N; i++) {
		cin >> start >> end;
		meetings.push_back({ start, end });
	}
	cout << greed();
	return 0;
}
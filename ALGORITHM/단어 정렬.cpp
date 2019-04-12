#include <iostream>
#include <string>
#include <queue>
#include <vector>
#include <algorithm> //sort, unique
using namespace std;

string arr[20000];

struct info
{
	int idx, ascii, size;
};

vector<string> information;
vector<info> temp;

// 아스키코드 소문자 a~z : 141~172

bool compareSize(string a, string b) {
	
	if (a.size() == b.size()) {
		return a < b; // 길이가 같으면 사전 순으로 (string을 부등호로 표시만 하면! 알아서 사전순으로 (방향은 또 설정하기 나름) 정렬이 된다 )
	}

	return a.size() < b.size(); // 길이가 짧은 것부터
}


int main() {
	int N; // 첫째 줄에 단어의 개수 N이 주어진다. (1≤N≤20,000)
	cin >> N;
	for (int i = 0; i < N; i++) { // N개의 줄에 걸쳐 알파벳 소문자로 이루어진 단어
		string item = "";
		cin >> item;
		information.push_back(item);
	}

	sort(information.begin(), information.end(), compareSize); 

	information.erase(unique(information.begin(), information.end()), information.end()); // 중복제거
	/*
	unique(): 연속된 중복 원소를 vetor의 제일 뒷부분으로 쓰레기값으로 보내버림
	참고 :https://dpdpwl.tistory.com/39
	vector.erase(start, end) : 파라미터를 두 개 받는 경우에는 [start~end-1] 범위의 인자를 삭제함
	참고 :https://blockdmask.tistory.com/75 
	*/

	for (int i = 0; i < information.size(); i++) {
		cout << information[i] << endl;
	}
	
	return 0;
}
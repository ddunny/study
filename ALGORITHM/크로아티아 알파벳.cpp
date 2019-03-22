#include <iostream>
#include  <string>
#include <vector>

using namespace std;

int visit[100] = { 0, }; // 첫째 줄에 최대 100글자의 단어가 주어진다. 알파벳 소문자와 -, = 로만 이루어져 있다.
int count_croatia = 0;
string ptn[8] = { "c=", "c-", "dz=","d-","lj","nj","s=", "z=" }; // 패턴을 담고 있을 곳

void findPattern(string input, int pattern, int index, vector<int> first_point) { //dfs
	int position = first_point[pattern];
	if (pattern == 2) { //3자리 패턴의 경우 (p_dz)
		if (!visit[position] && !visit[position + 1] && !visit[position + 2]) {
			visit[position] = 1;
			visit[position + 1] = 1;
			visit[position + 2] = 1;
			count_croatia += 1;

			if (position + 3 >= input.size()) {
				return;
			}
			if (input.find(ptn[pattern], position + 3) != -1) { //string::find(a,b) => a: 찾을 패턴, b: 찾기 시작할 위치 
				// string::find()의 return 값: 시작하는 인덱스. 존재하지 않는 경우 -1을 리턴함
				first_point[pattern] = input.find(ptn[pattern], position + 3);
				findPattern(input, pattern, position + 3, first_point);
			}
			else {
				return;
			}
		}
		else {
			return;
		}
	}
	else { //2자리의 패턴의 경우
		if (!visit[position] && !visit[position + 1]) {
			visit[position] = 1;
			visit[position + 1] = 1;
			count_croatia += 1;
			if (position + 2 >= input.size()) {
				return;
			}

			if (input.find(ptn[pattern], position + 2) != -1) {
				first_point[pattern] = input.find(ptn[pattern], position + 2);
				findPattern(input, pattern, position + 2, first_point);
			}
			else {
				return;
			}
		}
		else {
			return;
		}
	}
}

void matchingCroatia(string s) {
	int dz = s.find("dz=");
	int z = -1;
	
	/*dz=, z= 의 경우 z= 가 중복되므로 string::find로만 찾으려고 할 때 예상하는 값이 나오지 않을 수 있다. */

	if (dz != -1) { //dz=가 있는 경우
		int z_temp = s.find("z="); //z=이 시작하는 위치가
		if (z_temp == dz + 1) { // dz=에 있는 z= 라면
			z = s.find("z=", dz + 2); // 그 다음 인덱스부터 z=가 있는지 다시 확인한다.
		}
	}

	vector<int> start_point;
	// 각 패턴이 나타나는 첫 위치를 탐색할 시작값으로 기억한다.
	start_point.push_back(s.find("c="));
	start_point.push_back(s.find("c-"));
	start_point.push_back(dz);
	start_point.push_back(s.find("d-"));
	start_point.push_back(s.find("lj"));
	start_point.push_back(s.find("nj"));
	start_point.push_back(s.find("s="));
	start_point.push_back(z);


	for (int i = 0; i < start_point.size(); i++) {
		if (start_point[i] == -1) //포함하지 않는 패턴인 경우는 그냥 넘어감
			continue;

		findPattern(s, i, 0, start_point); //pattern, 탐색을 시작할 index
	}

}

int main(void) {
	string input;
	int answer = 0;
	cin >> input;

	matchingCroatia(input);
	
	// 패턴 매칭이 끝나고, 남은 알파벳을 세기 위한 곳이다.
	for (int i = 0; i < input.size(); i++) {
		if (visit[i]) // 이미 방문한 곳이면 카운팅 하지 않는다.
			continue;
		count_croatia += 1;
	}

	// 몇 개의 크로아티아 알파벳으로 이루어져 있는지 출력한다.
	cout << count_croatia;
	return 0;
}
/*
* 타일 장식물
* https://programmers.co.kr/learn/courses/30/lessons/43104
*
* 고려해야 할 사항
* 1. 사각형의 둘레 공식 2*(가로+세로)
* 2. 타일 한 변의 길이는 피보나치 수열 순서대로 길어진다 (1,1,2,3,5, ...)
* 3. 타일을 합친 모습을 보면 가로(혹은 세로)의 길이는 이전의 (가로+세로)와 같다.
* 4. 2가 곱해지는 것은 공통이므로 가장 마지막에 *2를 해주는 것으로 해도 된다.
* 5. int XXXXX long long 으로 타입 모두 맞춰주기
*
* @ddunny
*/
#include <string>
#include <vector>

using namespace std;

long long fibsum[80] = { 0, 1, 1, };
long long curcum[80] = { 0, 2, };

long long solution(int N) {
	long long answer = 0;

	for (int i = 2; i <= N; i++) {
		if (i > 2) {
			fibsum[i] = fibsum[i - 1] + fibsum[i - 2];
		}
		curcum[i] = fibsum[i] + curcum[i - 1];
	}

	answer = 2 * curcum[N];
	return answer;
}
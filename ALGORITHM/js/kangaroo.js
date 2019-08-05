/**
 * Kangaroo
 * https://www.hackerrank.com/challenges/kangaroo/problem
 *
 * 두 개의 라인에서 점프하는 두마리의 캥거루가 만나는 지점이 생기는지 확인하는 문제
 * - 시작점이 빠른 캥거루가 속도도 빠른 경우는 뛰어볼 필요도 없이 NO를 리턴하면 됨
 * - 같은 횟수만큼 뛰었을 때 만나는 지점이 생기는 지를 봐야하기 때문에, [시작 지점 + 속도 * 횟수]를 계산하여 그 지점이 같은지를 확인해야 한다.
 *   - while문의 경우 종료조건이 필요하므로, 종료조건을 꼭 넣어주어야 한다.
 *   - 종료지점을 설정한 조건은 제약조건에 주어진 숫자의 최대 크기를 끼워 맞추어 본 것... (내가 설정했지만 왜 통과하는진 잘 모르겠다)
 * 
 * 
 @ddunny
 */
function kangaroo(x1, v1, x2, v2) {
  if ((x1 > x2 && v1 > v2) || (x1 < x2 && v1 < v2)) {
    return "NO";
  }

  let curculate = true;
  let i = 1;
  while (curculate) {
    if (x1 + v1 * i > 100000000 || x2 + v2 * i > 100000000) {
      curculate = false;
      return "NO";
    }
    if (x1 + v1 * i === x2 + v2 * i) {
      curculate = false;
      return "YES";
    }

    i++;
  }
}
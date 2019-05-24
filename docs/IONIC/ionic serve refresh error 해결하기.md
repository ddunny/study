ionic serve refresh error 해결하기
===

> ### 현상
> gitlab 저장소에 저장된 ionic 프로젝트를 로컬에 clone한 뒤 package들을 재설치함   
> ```$ionic serve``` 명령어를 이용하여 브라우저에서 UI변경에 대해 실시간으로 확인하려 하였으나 refresh 할때 마다 *(코드 변경 후 cmd + s /ctrl + s)* 에러 발생   


### 원인
```app-scripts``` 3.1.6 이하 버전에서 발생한 문제입니다.
이하의 버전에서 ```ws``` 3.3.3 버전에 의존하는 ```app-scripts```인 경우, chrome의 최신버전에서 ```$ionic serve```가 정상적으로 수행되지 않았습니다.
*```@ionic/app-scripts```가 3.1.4 버전으로 설치됨 (기존 3.1.8)*   



### 해결
package.json에 별도로 설치된 ws는 없었기 때문에 별도의 삭제 과정없이, ```$npm install ws@3.3.2 --save-dev```를 수행하였습니다.

**[github 답변](https://github.com/ionic-team/ionic-app-scripts/issues/1345#issuecomment-352479512)에 따르면 해당 이슈는 3.1.6 버전에서 fix되었다고 합니다.**   
**패키지를 재설치하면서 3.1.8이었던 ```app-scripts```의 버전이 3.1.4로 다운그레이드 되면서 발생한 현상이었습니다.**
- 추가 해결방법
  - 위의 사유로 ```npm install @ionic/app-scripts@latest --save-dev```도 하나의 해결방법이 될 수 있습니다!

---
[문제해결에 도움을 받았어요♥](https://github.com/ionic-team/ionic-app-scripts/issues/1345)   
[★ionic app scripts 자세히 알기](https://www.npmjs.com/package/@ionic/app-scripts)
인앱브라우저 안의 SELECT BOX 옵션 보이게 하기
============


> ### 현상
> 인앱브라우저 안에 select 박스가 있는 경우, [완료] 버튼이 보이지 않음
> 배경을 클릭하거나, 다른 input 박스를 클릭해야 select 박스를 벗어날 수 있음
> 
> ### ISSUE PLATFORM
> iOS
> 
> ### 사용한 플러그인
> cordova-plugin-inappbrowser

### 해결

Ionic Plugin인 Keyboard 플러그인 내에 존재하는 인스턴스 멤버인 ``` hideFormAccessoryBar(hidden) ``` 설정 변경이 필요합니다.

> #### hideFormAccessoryBar(hidden)   
> Set to true to hide the additional toolbar that is on top of the keyboard. This toolbar features the Prev, Next, and Done buttons.   

디폴트옵션이 true로 설정이 되어 있어, 이전/다음/완료의 버튼이 존재하는 툴바가 보이지 않습니다.   
따라서 이 값을 false로 변경해주어야 합니다.

### 사용

```typescript
ionViewDidLoad() {
    ...
    this.keyboard.hideFormAccessoryBar(false);
    ...
}
```



[api/platform/Keyboard 자세히 보기](https://ionicframework.com/docs/nightly/api/platform/Keyboard/)
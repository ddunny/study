# inputbox 터치했을 때 키보드는 안뜨도록 하기
> inputbox에 값을 직접 입력하는 것을 막기 위함입니다.

ion-input 속성에 disabled 속성을 추가합니다.

``` html
<ion-input disabled="true" type="text" name="id"></ion-input>
<!-- AND -->
<!-- <ion-input [disabled]="isDisabled"></ion-input> -->
<!-- = [disabled]="expression"(Angular) -->
```

## readonly로 주면 안되나요?   
android에서 inputbox를 터치했을 때, 키보드의 영역만큼 화면이 올라가는 문제가 발생합니다.   
이 문제로 인해 disabled로 처리해주어야 합니다.

[이곳의 답변이 도움이 됐어요!](https://stackoverrun.com/ko/q/12905271#47096993)


## disabled 속성을 추가하니 iOS에서 inputbox의 text color가 적용한대로 보이지 않습니다.   
-webkit-text-fill-color 로 css를 적용해주세요.   

```css
-webkit-text-fill-color:#880000
/* -webkit-text-fill-color:{색상} */
```
[이곳의 답변이 도움이 됐어요!](https://stackoverflow.com/questions/262158/disabled-input-text-color)   


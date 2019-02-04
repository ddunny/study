iOS - 스크린샷 감지하기
===

> ### 목적
> iOS에서는 iOS 정책상 스크린샷을 막는 것이 불가합니다. 이를 보완하기 위해 스크린샷되는 순간을 감지하여, 사용자에게 별도의 알림창을 띄웠습니다.
> 
> ### PLATFORM
> iOS
> 
> ### 사용한 플러그인
> [cordova-plugin-detect-screenshot](https://github.com/Restocks/cordova-plugin-detect-screenshot)

`cordova plugin add cordova-plugin-detect-screenshot`

위 링크로 들어가 `Usage`에 적힌대로 이벤트를 추가하였습니다.

스크린샷을 감지해야 하는 `typescript` 코드 안에 삽입하였습니다.

```typescript
//..

ngOnInit() {
this.detectedScreenshot = this.detectedScreenshot.bind(this);
}

ionViewDidLoad() {
    this.platform.ready().then(()=>{
        if (this.platform.is('ios')) {
            document.addEventListener('active', this.detectedScreenshot, false);
        }
    }
}

//..

detectedScreenshot() {
    window.alert("Screenshot");
}
```

스크린샷이 발생했을 때 `원하는 동작`을 수행할 수 있습니다.   
`원하는 동작`은 스크린샷이 사진첩에 저장된 이후에 발생합니다.

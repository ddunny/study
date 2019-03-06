# IONIC CLI로 앱 실행해보기
> IONIC 앱 실행을 위한 CLI 디버깅용, 릴리즈용 명령어 공유합니다.   
> sentry를 사용하고 있기 때문에 IONIC에서 소개하는 실행 명령어에서 추가 flag가 필요합니다.

#### debug
``` shell
$ionic cordova run ios
```
*or*
```shell
$ionic cordova prepare ios
```
후, `Xcode`에서 실행 (prepare로 돌리는 게 속도가 빠름)


**+ `Xcode` 열기 명령어**
> `ios` 플랫폼이 존재할 때 가능

``` shell
$open -a Xcode platforms/ios
```

#### release
``` shell
$SENTRY_SKIP_WIZARD=true SENTRY_SKIP_AUTO_RELEASE=true ionic cordova build ios --prod
```
> **flag**   
> `SENTRY_SKIP_AUTO_RELEASE` : 릴리즈 버전이 build할 때마다 자동으로 변경되는 것을 방지하려고 주는 옵션
> `SENTRY_SKIP_WIZARD` : sentry wizard 호출을 막기 위해 주는 옵션


## android

#### debug
``` shell
$ionic cordova run android --prod --minifyjs --minifycss --optimizejs
```
*or*
``` shell
$ionic cordova prepare android 
```
후, Android Studio에서 돌리기  (prepare로 돌리는 게 속도가 빠름)   

#### release
``` shell
$ionic cordova run android --prod --minifyjs --minifycss --optimizejs --release
```
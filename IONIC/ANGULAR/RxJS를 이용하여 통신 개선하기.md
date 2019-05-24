RxJS를 이용하여 통신 개선하기
===

개발중인 IONIC 앱에서는 Angular에서 제공하는 HttpClientModule을 이용하여 서버와 통신하고 있습니다. [more](https://angular.io/guide/http)
```typescript
// in app/app.module.ts (excerpt)
import { HttpClientModule } from '@angular/common/http';

// in app/config/config.service.ts (excerpt)  ==> provider In IONIC
import { HttpClient } from '@angular/common/http'
```
`HttpClientModule`은 `Angular 4.3.0`버전에 추가되었습니다. [more](https://han41858.tistory.com/39)
Angular에서 제공하는 HTTP 모듈은 RxJS Observable 객체를 기반으로 만들어졌습니다. RxJS이지만 RxJS의 장점들을 이용하지 못하고 단순히 결과를 받는 데에만 이용하고 있었습니다. _(RxJS에 대해 잘 몰라서 :disappointed:)_


이 부분에 대해 어떻게 개선해나갔는지 내용을 공유합니다. :smiley:

`기존`
```typescript
// login.providers.ts
login(myData: object): Observable<any> {
  let url = this.urlConfig.getURL();

  return this.httpClient
    .post(url, myData)
    .timeout(20000);
}
```
#### 이런 생각을 시작으로 코드를 개선해나갔습니다.
- **통신에 실패하는 이유를 timeout으로만 두어도 될까**
- **http 응답에 따라 처리를 다르게 주는 것이 괜찮을 것 같다**

이런 생각을 시작으로 코드를 개선해나갔습니다.

---

###:zap:첫번째 개선

```typescript
login(information: Information): Observable<any> {
  const url = this.urlConfig.getURL();

  const settingData$ = from(this.memberConfig.getValue().then(uuid => {
        return {
          information: information,
          type: 'show'
        } as HttpDataType;
      }));

  return settingData$.pipe(
    tap(_ => { console.log(`settingData$`) }),
    mergeMap(
      (data: HttpDataType) => this.httpClient.post(url, data)
    ),
    retry(3),
    catchError(error => {
      console.log(`error is ${JSON.stringify(error)} error.status is ${error.status}`);
      if (error.status === 503) {
        return of(error.status);
      }
      return Observable.throw(`status: ${error.status} message: ${error.message}`);
    })
  );
}
```
#### 개선한 것
- **서버에 보낼 최종 데이터를 세팅하는 부분을 provider로 옮겼습니다.**
※   ```getValue()``` 로 얻는값은 provider를 사용하는 모든 곳에서 별도로 받아서 옮기고 파라미터로 받아왔습니다. 중복을 피하기 위해 provider 내에서 한번만 세팅할 수 있도록 했습니다.
`getValue() ← 포스팅을 위해 변경한 이름`
- **흐름(Stream)을 이어나갔습니다.**
※ 위에 언급한 `getValue()`는 Promise 함수입니다. 따라서 데이터가 제대로 세팅될 수 있도록 `then()` 이후에 서버에 보낼 데이터를 세팅하고, 세팅한 값을 return 했습니다. HTTP통신에 이용하기 위하여, Promise를 Observable로 변경하기 위해 `from()`으로 묶었습니다. 
- **개선하려고 했던 내용(위에서 말한 생각들)을 개선했습니다.**
※ `retry()`로 서버통신에 실패했을 경우에 대한 처리를 보완했습니다. 
```
정리
mergeMap(): settingData$에서 받은 데이터를 받아 통신에 보내기 위해 사용
retry(): 통신에 실패했을 경우 3번 다시 시도하도록 함
catchError(): error.status에 따라 처리를 다르게 해주기 위해 넣음. 503이 아닌 경우는 재시도없이 끝내도록 함
```

#### 개선했지만 부족해보인다..
- **시간을 두고 재시도 하는게 좋을 것 같다..**
※ `retry()`는 통신에러가 발생하면 지체없이 바로 재시도를 했습니다. 서버 지연의 경우 시간을 두고 재시도하는 것이 더 적합할 것 같았습니다. (시간지나고 재시도 했을 때 될 수도 있으니!)
- **503도 에러는 맞다..**
※ error.status가 503인 경우는 에러를 던지지 않게 짰지만, 생각해보면 재시도 했는데 계속 503이면 이것도 이용이 불가능한 상태이기 때문에 에러를 내보내줘야 한다고 생각했습니다.

---

###:zap:두번째 개선

```typescript
login(information: Information): Observable<any> {
  const url = this.urlConfig.getURL();

  const settingData$ = from(this.memberConfig.getValue().then(uuid => {
        return {
          information: information,
          type: 'show'
        } as HttpDataType;
      }));

  let countRetry = 1;
  return settingData$.pipe(
    mergeMap((data: HttpDataType) => this.httpClient.post(url, data)),
    retryWhen(error$ => error$.pipe(
      delay(1500),
      take(4),
      tap(error => {
        const log = `login retryError status: ${error.status} message: ${error.message}`;
        if (error.status !== 503) { // 503은 일시적인 현상이므로 재시도한다.
          console.log(`error status is not 503 error.status is ${error.status}`);
          throw log;
        }
        countRetry++;
        if (countRetry === 5) {
          console.log(`countRetry complete`);
          throw log;
        }
        console.log(`after take!! countRetry :${countRetry}`);
      })
    ))
  );
}
```

#### 개선한 것
- **`retry()`오퍼레이터를 `retryWhen()`으로 변경했습니다.**
※ `retry()`는 단순히 재시도가 가능했지만 `retryWhen()` 함수는 더 유연했습니다. `retryWhen()`은 subscription을 받아서 다시 제어할 수 있었습니다. 따라서 더 유연한 작업을 위해 변경했습니다.
- **지연시간을 추가했습니다.**
※ 첫번째 개선 때 고민하던 부분을 해소하기 위해 `delay()`를 이용하여 `take()`로 통신을 재시도하기 전에 지연시간을 주었습니다. 
- **모든 시도마다 통신을 실패했을 때, 에러를 던지는 것으로 변경했습니다.**
※ `take()`로 재시도를 하지만, 설정한 재시도가 끝났을 경우 어떻게 처리할지 고민했습니다. `tap()`은 매 재시도 때마다 실행되는 곳이기 때문에 이 함수를 응용했습니다. `retryWhen()`은 에러가 발생했을 경우에만 들어오는 점을 함께 생각했습니다.
 `countRetry`라는 변수를 두고 `tap()`안에서 카운팅되도록 했습니다. 모든 재시도가 끝났는데도 에러라면 `if (countRetry ===5)` 조건으로 들어옵니다. 이 경우에 `tap()`으로 전달받은 데이터를 throw 시켜서 subscribe의 `onError()`로 잡히도록 했습니다. 

```
정리
retryWhen(): 좀 더 유연한 통신 재시도를 위해 사용 [흐름 자체를 파라미터로 받음]
delay(): 시간을 지연시키기 위해 사용 [*delay(1500) : 1.5초 지연]
take(): 원하는 만큼 다시 실행하기 위해서 사용 [*take(4) : 4번 재시도]
tap(): 흐름을 제어하기 위해서 사용 [ex.503이 아닌 경우 재시도 안하고 끝내기]
```

---

포스팅에 사용한 함수명, 변수명은 포스팅용입니다. 실무에 사용한 이름은 아닙니다.:hand:
**어떻게 RxJS를 활용했는지**에 대해서 봐주시면 됩니다!

읽어주셔서 감사합니다.:blush:


#### :heart:잘못된 부분이 있을 수도 있습니다. 따스한 지적 언제나 환영합니다. :heart:
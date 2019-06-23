캐러셀 만들기 (RxJS Quick Start 학습 내용)
===

**getElementsByClassName VS querySelector**
---

예전에 클래스에 접근할 때 getElementsByClassName 사용하기도 했었다. 교재에서는 querySelector를 이용하여 클래스에 접근해서 차이점이 궁금했다.  

### 답

- **document.getElementsByClassName**
  - a HTMLCollection is returned. This list is a LIVE list*.
  - you can just define a class.
  - querySelector can be a complete CSS(3)-Selector with IDs and Classes and Pseudo-Classes
    - `#id.class:pseudo`
    - `tag #id .class .class.class`

- **document.querySelector**
  - a NodeList is returned. This is NOT a live list but is instead a STATIC list* (ie. it should not change).

[참고]

- [medium 포스팅](https://medium.com/@abi_travers_/an-issue-you-may-not-have-noticed-with-givenelement-classlist-bitesize-js-4685d803ae)
- [스택오버플로우](https://stackoverflow.com/questions/14377590/queryselector-and-queryselectorall-vs-getelementsbyclassname-and-getelementbyid)

"ontouchstart" in window
---

```javascript
const SUPPORT_TOUCH = "ontouchstart" in window;
const EVENTS = {
    start: SUPPORT_TOUCH ? "touchstart" : "mousedown",
    //...
}
```

사람이 터치했을 때를 감지하기 위한 방법인데요. 처음보는 표현이라 신기했습니다.  
(true를 리턴하면 사람이 터치한겁니다.)  
3가지 방법이 더 있습니다.

**1**

```javascript
document.createEvent('TouchEvent')
```

**2**

```javascript
window.DocumentTouch && document instanceof DocumentTouch
```

**3**

```javascript
navigator.msMaxTouchPoints > 0
```

[참고](https://codeburst.io/the-only-way-to-detect-touch-with-javascript-7791a3346685)

rxjs - takeUntil
---

```javascript
move$.pipe(takeUntil(end$));
```

`end$` Observabled이 발생하면(값을 받으면?) `moves$`의 이후 데이터들은 discard.  
> 첫번째 인자로 전달된 Observable에서 데이터가 발생하는 순간 대상 Observable의 상태를 종료(complete) 처리하고 자동으로 구독을 해제한다.

rxjs - takeUntil vs switchMap
---

> start$에서 데이터가 발생할 때마다 move$이 생성되므로 기존 데이터를 자동으로 종료하기 위해서 switchMap으로 바꾸자.

기존 데이터를 자동으로 종료? takeUntil와 하는 일이 겹치는게 아닌가? 싶음

### 답

`switchMap`은 가장 바깥에 있는 `start$`의 구독을 해제하는 것이고 `takeUntil`은 내부에서 `move$`의 구독을 해제하는 것이다.

```javascript
const drag$ = start$
.pipe(
    switchMap(start => move$.pipe(takeUntil(end$)))
);
```

**switchMap**: 외부 옵저버블이 내부 옵저버블의 이전 구독을 취소할 때 발생한다. 외부 옵저버블이 발생될 때마다 내부 옵저버블의 새로운 구독이 시작된다.

toPos()
---

> toPos를 pipe 오퍼레이터에 인자로 전달할 수 있도록 개선해보자.

srart$ ,moves$의 위치 차이를 구하기 위해서 각각의 Event 속성에서 pageX 값을 추출합니다. 이런 식으로 함수 만드는게 신선했습니다.

```javascript
function toPos(obs$) {
    return obs$
    .pipe(
        map(v=> SUPPORT_TOUCH ? v.changedTouches[0].pageX : v.pageX)
    );
}
```

```javascript
const start$ = fromEvent($view, EVENTS.start).pipe(toPos);
const move$ = fromEvent($view, EVENTS.move).pipe(toPos);
```

구독 해제는 오퍼레이터를 이용해서 자동으로 하자
---

직접적으로 구독을 해제(unsubscribe)하지 않는다. 가급적이면 `takeUntil`, `take`, `first` 오퍼레이터를 이용하여 자동으로 구독을 해제하도록 한다.

오퍼레이터 바깥에 선언된 변수는 외부의 영향을 받을 수 있기 때문에 사용하지 않는다
---

 ```javascript
let viewWidth = $view.clientWidth // X
obs$.pipe(map(data => data + viewWidth));

viewWidth = "something value" // 이런식으로 수정될 수 있다.
obs$.pipe(
    map(data => {
        let viewWidth = 100; // 내부에 선언된건 외부의 영향을 받지 않아서 ㄱㅊ
        return data + viewWidth;
    })
)
```

rxjs - startWith
---

subscribe 시에 초깃값을 전달하는 오퍼레이터이다.

```javascript
startWith(s)
```

subscribe했을 때 초깃값이 s입니다.

rxjs - withLatestFrom
---

### withLatestFrom vs CombineLatest

- withLatestFrom
  - Also provide the last value from another observable.

- CombineLatest
  - when an item is emitted by either of two Observables, combine the latest item emitted by each Observable via a specified function and emit items based on the results of this function

공식 문서?(http://reactivex.io/documentation/operators.html#combining)에서 `withLatestFrom`를 클릭하면 `CombineLatest`로 연결됩니다.

- withLatestFrom는 왜 첫번째 값이 안나올까?  
  - 대상 이벤트가 발생하는 시점에 두번째 옵저버블의 최신 값을 전달받는 것이다. 대상 이벤트의 첫번째 값이 발생한 시점에 두번째 옵저버블에서 생성된 값이 아무것도 없는 상태라면 안나온다.

**LINK**

- [withLatestFrom marble diagram](https://rxmarbles.com/#withLatestFrom)
- [CombineLatest marble diagram](https://rxmarbles.com/#combineLatest)

rxjs - share
---

### share() vs publish()

- **publish()**
  - 옵저버가 완료되고 난 후에 다시 재시작하지 않는다
  - once the observer completes, it will not restart if a new subscriber is added after completion.

```typescript
const p = source$.publish();
p.subscribe(observer("a"));
p.connect();
p.subscribe(observer("b"));
setTimeout(() => p.subscribe(observer("c")), 10);
```

```cmd
# result
observer a: 42
observer a: 54
observer b: 54
observer a: complete
observer b: complete
observer c: complete
```

- The example will allow us to look at what happens with observers that subscribe before `connect` is called, after `connect` is called and after the published observable completes.

- **share()**
  - if the underlying observer completes and a new subscriber is added later, the observer effectively begins a new execution and starts emitting data.

```typescript
const s = source$.share();
s.subscribe(observer("a"));
s.subscribe(observer("b"));
setTimeout(() => s.subscribe(observer("c")), 10);
```

```cmd
# result
observer a: 42
observer a: 54
observer b: 54
observer a: complete
observer b: complete
observer c: 6
observer c: 9
observer c: complete
```

- `c` subscribes after the source observable has completed; a new subject is created and subscribed to the source, from which it immediately receives the first `next` notification, followed by the second `next` notification and the `complete` notification.

**참고**

- [Rxjs Observable publish refcount vs share](https://javascript.tutorialhorizon.com/2017/09/03/rxjs-observable-publish-refcount-vs-share/)
- [rxjs-understanding-the-publish-and-share-operators](https://blog.angularindepth.com/rxjs-understanding-the-publish-and-share-operators-16ea2f446635)


pipe initialValue
---

```typescript
of(10, 20).pipe(
    scan((acc, value, index) => {
        //...
    }, {
        sum: 0,
        ave: 0
    })
)
```

- sum = 0, ave = 0 으로 초기데이터를 전달한 것. 이렇게 전달하면 scan이 뱉는 첫번째 값이 된다.

260 페이지
---

이해 x.

- 드래그 로직

자바스크립트는 기본적으로 하나의 메인 스레드에서 모든 작업이 실행된다
---

자바스크립트 엔진이 단일 호출 스택을 사용한다.

- 이 말은 어떤 작업의 비용이 크거나 대기 시간이 긴 경우에는 애플리케이션 자체가 멈출 수 있다는 말이기도 하다.
- 비동기 작업을 함으로써 하나의 메인 스레드가 계속 점유하지 않도록 한다.

  - **Rx 스케쥴러**
    - 프로그래밍 언어의 스케줄러를 효과적으로 사용할 수 있도록 만든 가상의 스케줄러
    - (in RxJS) 자바스크립트의 스케줄러가 하는 일을 RxJS에서 효과적으로 처리하기 위해서 만든 가상의 스케줄러
    - RxJS를 사용하려고 하는 두가지 관점

    ```vi
    * 구독(subscribe) 자체의 동기식 처리여부와
    * 데이터 처리에 대한 동기식 처리여부
    ```

    - 동기, 비동기 또는 데이터 전달주기 등을 제어하기 위해서 사용된다.

subscribeOn vs observeOn
---

- subscribeOn
  - 구독 처리를 어떻게 할 것인가?
    - 오퍼레이터의 위치에 상관 없이 **한 번** 설정할 수 있다.

- observeOn
  - 데이터 전달을 어떻게 할 것인가?
    - 오퍼레이터의 위치에 영향을 미친다.

태스크 vs 마이크로 태스크
---

```vim
callback을 사용하면 태스크 대기열에 등록되고,
Promise와 같은 작업은 마이크로태스크 대기열에 등록된다.
```

- setTimeout 함수는 callback 함수를 바로 실행하지 않고 태스크 큐에 추가한다.
  - 호출 스택이 빌 때마다 큐에서 호출 콜백함수를 꺼내와서 실행함
- 태스크보다 마이크로태스크에 있는 작업의 우선순위가 높다.
  - 마이크로태스크가 계속해서 실행될 경우 일반 태스크인 UI 렌더링이 지연되는 현상이 발생할 수도 있다.

**[참고]**

- [자바스크립트와 이벤트 루프](https://meetup.toast.com/posts/89)

rxjs - concat
---

### concat vs merge

**차이**: 동시에 합치니, 순차적으로 합치니

- **concat()**
  - 완료된 Obsevable 뒤에 추가적인 Observable들을 연결시킨다.
- **merge()**
  - 주어진 Observable들에서 동시에 방출하는 값들을 모두 합친다.

[참고]
- [concat API](https://rxjs-dev.firebaseapp.com/api/index/function/concat)
- [merge API](https://rxjs-dev.firebaseapp.com/api/index/function/merge)

기타
---

- 캐러셀 구현한 다른 포스팅 공유
  - [레진 기술 블로그 - 캐러셀 구현하기](https://blog.naver.com/PostView.nhn?blogId=mudoidoi&logNo=221416331695&parentCategoryNo=&categoryNo=4&viewDate=&isShowPopularPosts=true&from=search)

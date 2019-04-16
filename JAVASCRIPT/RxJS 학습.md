RxJS
============
> 참고 사이트는 연결링크와 기재한 링크로 확인하실 수 있습니다.

### pipe
```typescript 
pipe(...fns: Array<UnaryFunction<any, any>>): UnaryFunction<any, any> 
// https://rxjs-dev.firebaseapp.com/api/index/function/pipe
```
도트체이닝 없이 오퍼레이터를 받는 것   
pipe는 처리되어야 할 작업들을 순차적으로 받아서 처리합니다.

- [도트체이닝의 단점](https://feel5ny.github.io/2018/11/18/Async_04/)

```typescript
of(1,2,3).map(x => x + 1).filter(x => x > 2);

of(1,2,3).pipe(
  map(x => x + 1),
  filter(x => x > 2)
);
// https://blog.angularindepth.com/reading-the-rxjs-6-sources-map-and-pipe-94d51fec71c2
```
- [이 곳](https://feel5ny.github.io/2018/11/18/Async_04/)에서 더 많은 정보를 확인할 수 있습니다.

---

### debounceTime
```typescript
debounceTime<T>(dueTime: number, scheduler: SchedulerLike = async): MonoTypeOperatorFunction<T>
```

```typescript
Rx.Observable.fromEvent(input, 'keyup')
  .debounceTime(300)
  .pluck('target', 'value')
  .map(value => myAwesomeSearch(value))
  .map(cities => cities.map(city => `<li>${city}</li>`).join(''))
  .subscribe(html => suggestions.innerHTML = html);
  // https://medium.com/@jvdheijden/rxjs-throttletime-debouncetime-and-audittime-explained-in-examples-c393178458f3
  ```
`.debounceTime(300)`: `keyup` 이벤트가 발생했을 때 결과를 바로 제안하지 않고 300ms를 기다린 후 내놓습니다. 사용자가 300ms 이내에 새로운 것을 입력하면 타이머를 재설정합니다.
- [설명 더 보기](https://medium.com/@jvdheijden/rxjs-throttletime-debouncetime-and-audittime-explained-in-examples-c393178458f3)


---

### from
```typescript
from<T>(input: ObservableInput<T>, scheduler?: SchedulerLike): Observable<T>
  ```
  Observable 형태로 변경해줍니다.
- `from`을 이용해서 Observable로 만들 수 있는 형태
  - arrays, maps, sets, promises, Dom nodes, and generator functions.

---

### mergeAll
> 대부분의 경우 [mergeMap](https://www.learnrxjs.io/operators/transformation/mergemap.html) 을 단일 연산자로 사용합니다.

---

### mergeMap
```typescript
mergeMap<T, R, O extends ObservableInput<any>>(project: (value: T, index: number) => O, resultSelector?: ((outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R) | number, concurrent: number = Number.POSITIVE_INFINITY): OperatorFunction<T, ObservedValueOf<O> | R>
```

내부 옵저버블이 방출되면, 해당 값을 바깥 옵저버블과 함께 병합합니다.
※ mergeAll과 map을 합친 것입니다.

```typescript
// using map and mergeAll
from([1,2,3,4]).pipe(
  map(param => getData(param)),
  mergeAll()
).subscribe(val => console.log(val));
```


```typescript
// using mergeMap
from([1,2,3,4]).pipe(
  mergeMap(param => getData(param))
).subscribe(val => console.log(val));
```


- [자세한 설명은 이곳에 있어요! - Understanding RxJS map, mergeMap, switchMap and concatMap](https://medium.com/@luukgruijs/understanding-rxjs-map-mergemap-switchmap-and-concatmap-833fc1fb09ff)

---

### concatAll
> 대부분의 경우 [concatMap](https://www.learnrxjs.io/operators/transformation/concatmap.html) 을 단일 연산자로 사용합니다.

---

### concatMap
```typescript
concatMap<T, R, O extends ObservableInput<any>>(project: (value: T, index: number) => O, resultSelector?: (outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R): OperatorFunction<T, ObservedValueOf<O> | R>
```

이벤트 스트림에서 발생한 항목들을 처리할 때 `concat`연산자를 사용합니다.
이벤트 스트림을 통해 전달된 항목  하나에 대한 처리가 완료된 후에 다음 항목을 처리합니다.
따라서 항목의 순서가 뒤바뀌지 않고 그대로 출력됩니다.   

- [자세한 설명은 이곳에서!](https://www.androidhuman.com/community/2016/02/08/gdg_korea_android_weekly_02_1/)

---

### forkJoin
모든 observable이 끝났을 때, 각각으로 부터 얻은 마지막 값을 내놓습니다.

```
페이지 로드(또는 다른 이벤트)에 대해 여러 개의 요청을 실행하고, 모든 응답을 받았을 때 액션을 취하고 싶은 경우 사용
```
- In this way it is similar to how you might use [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all).
---

#### [subscribe](https://blog.angularindepth.com/how-to-read-the-rxjs-6-sources-part-1-understanding-of-and-subscriptions-694e7d9def6b)

subscribe는 observer 입니다.

**observer**

`error`, `next`, `complete`
위 세가지 함수를 속성으로 포함하고 있습니다.

`next`: Number나 Array나 객체같은 여러 값을 subscribers에게 보냄
`error`: 자바스크립트 에러나 예외값을 보냄
`complete`: 어떤 값도 보내지 않음

- [이 포스팅을 보고 정리했습니다! 클릭하시면 더 상세한 내용을 확인할 수 있어요.](https://feel5ny.github.io/2018/03/25/angular_observable/)


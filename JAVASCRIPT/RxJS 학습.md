RxJS
============
> 참고 사이트는 연결링크&기재한 링크로 확인하실 수 있습니다.

#### [concatMap](https://www.androidhuman.com/community/2016/02/08/gdg_korea_android_weekly_02_1/   )
```typescript
concatMap<T, R, O extends ObservableInput<any>>(project: (value: T, index: number) => O, resultSelector?: (outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R): OperatorFunction<T, ObservedValueOf<O> | R>
```

이벤트 스트림에서 발생한 항목들을 처리할 때 `concat`연산자를 사용한다. 이벤트 스트림을 통해 전달된 항목  하나에 대한 처리가 완료된 후에 다음 항목을 처리한다. 따라서 항목의 순서가 뒤바뀌지 않고 그대로 출력됩니다.   

---

#### mergeMap
```typescript
mergeMap<T, R, O extends ObservableInput<any>>(project: (value: T, index: number) => O, resultSelector?: ((outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R) | number, concurrent: number = Number.POSITIVE_INFINITY): OperatorFunction<T, ObservedValueOf<O> | R>
```

내부 옵저버블이 방출되면, 해당 값을 바깥 옵저버블과 함께 병합합니다.

---

#### [pipe](https://feel5ny.github.io/2018/11/18/Async_04/)
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

---

#### debounceTime
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

#### [subscribe](https://blog.angularindepth.com/how-to-read-the-rxjs-6-sources-part-1-understanding-of-and-subscriptions-694e7d9def6b)

subscribe는 observer 입니다.

**observer**

`error`, `next`, `complete`
위 세가지 함수를 속성으로 포함하고 있습니다.

`next`: Number나 Array나 객체같은 여러 값을 subscribers에게 보냄
`error`: 자바스크립트 에러나 예외값을 보냄
`complete`: 어떤 값도 보내지 않음

- [이 포스팅을 보고 정리했습니다! 클릭하시면 더 상세한 내용을 확인할 수 있어요.](https://feel5ny.github.io/2018/03/25/angular_observable/)


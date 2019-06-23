배열 중복 요소 제거
===
Array.filter() 를 통해 배열에 존재하는 중복 요소를 제거할 수 있습니다.


> _**arr.filter(callback(element[, index[, array]])[, thisArg)**_   
> filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 **새로운 배열**로 반환합니다. [문서보기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

## 방법

```javascript
Array.filter((item, index) =>
        nums.indexOf(item) === index
    )
```

## 예제

```javascript
let nums = [1,1,2,5,1,3];
```
`nums`라는 배열에 `1`이 3개가 존재합니다.

```javascript
let filteredArray = nums.filter((item, index) =>
        nums.indexOf(item) === index
    );
```

`filter`를 이용하여 새로운 변수 `filteredArray`를 만들어줍니다.

### nums.indexOf(item) === index 의 의미

**run**

```javascript
console.log(`index is ${index} indexof(item) ${nums.indexOf(item)}`);
```

**result**

```cmd
index is 0 indexof(item) 0
index is 1 indexof(item) 0
index is 2 indexof(item) 2
index is 3 indexof(item) 3
index is 4 indexof(item) 0
index is 5 indexof(item) 5
```

- 필터링 조건: 해당하는 요소의 indexOf() 값과 배열에 위치하는 값이 같을 경우에만 출력

> **_arr.indexOf(searchElement[, fromIndex])_**   
> indexOf() 메서드는 배열에서 지정된 요소를 찾을 수 있는 **첫 번째 인덱스**를 반환하고 존재하지 않으면 -1을 반환합니다. [문서보기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

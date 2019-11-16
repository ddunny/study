정렬하기
===

javascript에서는 배열을 정렬할 수 있는 자체함수를 제공합니다.

### Array.prototype.sort()
> **_arr.sort([compareFunction])_** 
> sort() 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다. **정렬은 stable sort가 아닐 수 있습니다. 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따릅니다.** [문서보기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)  

> **매개변수**  
> compareFunction (Optional)  
> 정렬 순서를 정의하는 함수. 생략하면 배열은 각 요소의 문자열 변환에 따라 각 문자의 유니 코드 코드 포인트 값에 따라 정렬됩니다.

> **반환 값**  
> 정렬한 배열. **원 배열이 정렬되는 것에 유의하세요.** 복사본이 만들어지는 것이 아닙니다.

문자열의 유니코드 코드값에 따라 소팅하기 때문에  
문자는 원하는대로 결과를 얻을 수 있지만, 숫자는 원하는대로 결과를 얻을 수 없습니다.

```javascript
let months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

let array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]
//*원하는 소팅 결과 [1, 3, 21, 39, 100000]
```

숫자를 제대로 소팅하기 위해서 `compareFunction`을 넘겨줍니다. `compareFunction`이 제공되면 배열 요소는 compare 함수의 반환 값에 따라 정렬됩니다. [문서보기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#%EC%84%A4%EB%AA%85)  

```javascript
function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
```

클로저 함수로도 사용 가능합니다.

예제
---

```javascript
let array1 = [1, 30, 4, 21, 100000];
array1.sort(function(a, b) { // 오름차순
        return a - b;
    })
//output : [1,4, 21, 30 ,100000]
```

개선하기
---

### _map_ 을 이용한 정렬 
[문서보기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#map%EC%9D%84_%EC%82%AC%EC%9A%A9%ED%95%9C_%EC%A0%95%EB%A0%AC)  
`compareFunction`이 복잡해지고, 정렬할 요소가 많아질 경우, `map`을 사용한 정렬을 고려해보는 것이 좋습니다. 이 방법은 **임시 배열을 하나 만들어서** 여기에 실제 정렬에 사용할 값만을 뽑아서 넣어서 이를 정렬하고, 그 결과를 이용해서 실제 정렬을 하는 것입니다.  

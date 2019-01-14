textContent vs innerText
============

#### 숨겨진 요소(display:none)에 대한 처리

- textContent
  - 숨겨진 요소를 모두 반환한다.

- innerText
  - style을 인지하고 숨겨진 요소들의 텍스트를 반환하지 않는다.






#### CSS 스타일링 인지
- textContent
  - CSS 스타일링을 인지하지 못한다.

- innerText
  - CSS 스타일링을 모두 인지한다.

#### 코드로 차이 알아보기

  ```html 
   <span>Hello <span style="display: none;">World</span></span>
   ```
- textContent로 볼 수 있는 것 Hello World
- innerText로 볼 수 있는 것 Hello

```javascript
var span = document.querySelector('span');
span.innerHTML = "1<br>2<br>3<br>4\n5\n6\n7\n8";
```
- span.textContent
1234
5   
6   
7   
8    

- span.innerText
1   
2   
3   
4 5 6 7 8

#### 기타
- textContent를 사용하면 XSS(크로스 사이트 스크립팅) 공격을 방지할 수 있다.
- innerText의 퍼포먼스가 더 무겁다. 왜? 값을 리턴하기 위해 레이아웃 정보를 필요로 하기 때문에

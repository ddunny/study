PHP5.x에서 PHP7.x으로 올라가면서 에러핸들링을 하는 방법에 대해 새롭게 알아봤습니다.  
기존에 PHP5에서는 try, catch (Exception) 을 사용했는데요, PHP7에서는 Throwable을 사용할 수 있습니다.

## Throwable

포함범위 [참고](https://www.php.net/manual/en/language.errors.php7.php#language.errors.php7.hierarchy)  

```
Throwable
  Error
    ArithmeticError
      DivisionByZeroError
  AssertionError
  CompileError
    ParseError
  TypeError
    ArgumentCountError
  ValueError
    UnhandledMatchError
  Exception
    ...
```

보시다시피 `Throwable`가 가장 상위에 존재합니다.  
테스트를 해보니 500에러도 잡았습니다.  

### 사용방법 

```php
try {
   // ...
} catch (Throwable $e) {
    // ...
}
```

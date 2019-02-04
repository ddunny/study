mysql_close()의 필요성
============

사용하고 있는 php 코드에서 ```mysql_connect()```로 DB에 연결하고, ```mysql_query()```로 쿼리를 실행시킨다. 쿼리 오류가 발생하거나 서버에 연결할 수 없을 때 ``` or die() ```로 처리하여, 파일을 종료했다. 문득, ```mysql_close()```없이 ```die()```를 사용하여 종료해도 되는지 궁금했습니다.

### mysql_close - Close MySQL connection
[PHP 공식사이트 - mysql_close](http://php.net/manual/en/function.mysql-close.php)

> 경고: 이 확장은 PHP 5.5.0 에서 더 이상 사용되지 않으며, PHP 7.0.0에서는 제거되었습니다. mysql_close 대신에 MySQLi 이나 PDO_MySQL 확장이 사용되어야 합니다.   
> 
> MySQLi 에서의 사용: mysqli_close()
> PDO 에서의 사용: PDO 개체에 NULL 값 할당

```php
mysql_close ([ resource $link_identifier = NULL ] ) : bool
```

```mysql_close()```는 지정된 링크 식별자와 연결된 MYSQL 서버에 대한 non-persistent connection을 닫습니다. link_identifier 을 지정하지 않으면, 마지막으로 연 링크가 사용됩니다.


PHP 스크립트의 실행이 완료되면 non-persistent MySQL connection과 result 셋이 자동적으로 삭제됩니다. 따라서 명시적으로 열린 connection을 닫고 result 셋을 보여주는 것은 선택사항이지만, 선택사항을 선택하는 것을 추천합니다.   *성능향상에 도움을 준다고 함*

### non-persistent connection VS persistent connection
[PHP 공식사이트 - mysql_pconnect Vs mysql_connect](http://php.net/manual/en/function.mysql-pconnect.php)   

> 경고: 이 확장은 PHP 5.5.0 에서 더 이상 사용되지 않으며, PHP 7.0.0에서는 제거되었습니다. mysql_close 대신에 MySQLi 이나 PDO_MySQL 확장이 사용되어야 합니다.   
> 
> MySQLi 에서의 사용: mysql_connect() with *p*: host prefix   
> PDO 에서의 사용: PDO::___construct() with PDO::ATTR_PERSISTENT an a driver option

php 에서 제공하는 MySQL DB 확장 함수로 ```mysql_connect()```와 ```mysql_pconnect()```가 있습니다.    
```mysql_pconnect()```는  ```mysql_connect()```와 굉장히 유사하지만, 두가지 큰 차이점이 있습니다.   
```mysql_pconnect()```는 먼저 동일한 호스트, 사용자 이름 및 암호로 이미 열려있는 persistent 한 링크를 찾습니다. 링크를 찾으면, 새 연결을 열지 않고 해당 식별자가 반환됩니다.   
둘째, 스크립트 실행이 끝날 때 SQL 서버와의 연결이 종료되지 않고 나중에 사용할 수 있도록 열려 있습니다.    
*```mysql_close()```는 ```mysql_pconnect()```에서 설정한 링크를 종료할 수 없습니다.*

위와 같은 연결을 persistent 연결이라고 부릅니다.
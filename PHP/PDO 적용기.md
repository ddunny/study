PDO 적용기
===

기존에 사용하던 Database Extension `mysql_connect` 을 PHP에서 권장하는 방식인 `PDO`로 변경하는 작업을 진행해보았습니다.  

변경한 사유
---

사용하고 있는 PHP의 버전은 5였지만, 버전업을 고려하여 Database Extension을 변경하는 작업을 진행했습니다.

> `mysql_connect`은 `PHP 4, PHP 5`에서 사용되던 방식입니다.  
> 글을 작성하는 2019.06월엔 `PHP 7`까지 나온 상태입니다.
> [내용보기](https://www.php.net/manual/en/function.mysql-connect.php)

PHP 공식 문서에서는 `mysql_connect`의 대체로 `mysqli_connect`나 `PDO`를 사용하라고 권장합니다.

### `mysqli`가 아닌 `PDO`를 선택한 이유
더 다양한 방법으로 사용할 수 있는 PDO를 선택했습니다.  
`mysqli`는 mySQL에서만 사용할 수 있습니다. mySQL에서만 사용할 수 있는 대신 mySQL에 특화되었습니다.  mySQL을 사용하고 있긴 하지만, 커넥션만 할 뿐 php 코드로 mySQL을 깊이 다루고 있진 않기 때문에 mySQL에 특화된 것이 큰 장점은 아니었습니다.  
`PDO`는 14종류의 RDBMS를 커버합니다. 또한 Prepared Statement를 사용할 때 이름을 가진 플레이스 홀더를 이용할 수 있는 장점이 있습니다.
> `mysqli`와 `PDO` 모두 _Prepared Statement_ 를 제공합니다. 두 Database Extention에서 기본적인 _?_ 를 이용한 플레이스 홀더는 사용 가능합니다. `PDO`에서는 key값을 이용한 _:key_ 로 사용이 가능합니다.  
( _:key_ 를 이용하는 것이 더욱 코딩의 완성도를 높여주었습니다.)


PDO를 적용한 커넥션 파일 구조
---

### 구조

```php
class DBConnection {
    public function __construct() {}
    public function changeDB($db) {}
    public function querySelect($query, $parameters, $expectSingleResult = false) {}
    public function queryInsert($query, $parameters) {}
    public function queryUpdate($query, $parameters) {}
}

```

---

**클래스 변수**

```php
private $dbname = '';
private $host = '';
private $password = '';
private $options = array(
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false
);
private $connected = false;
private $quer;
private $conn;
```

---

**function ___construct()_**

```php
function __construct($postdata) {
    $this->host = $postdata->host;
    $this->dbname = $postdata->dbname;
    $this->username = $postdata->username;
    $this->password = $postdata->password;
    $dsn = "mysql:host=$this->host;dbname=$this->dbname";

    if ($this->connected == true) {
        return true;
    }

    try {
        $this->conn = new PDO($dsn, $this->username, $this->password, $this->options);
        $this->connected = true;
    }
    catch (PDOException $e) {
        return array("error"=>"error",
                     "message"=>"CODE: SCN0100",
                     "log"=>$e->getMessage()." CODE: SCN0100");
    }
}
```

- DB와 PHP 파일의 인코딩이 다르다면 `$dsn`에 `;charset=utf8`를 붙여주세요.
  - PHP 5.3.6 버전 이상에서만 가능합니다.
  - 5.3.6보다 낮은 버전의 PHP를 사용한다면, PDO 객체를 생성하는 곳의 다음 라인에 `$this->conn->exec('SET NAMES utf8');`을 넣어주세요.

```php
$this->conn = new PDO($dsn, $this->username, $this->password, $this->options);
$this->conn->exec('SET NAMES utf8');
```

---

**function _changeDB($db)_**

```php
try {
    $this->conn->exec("USE $db");
}
catch (PDOException $e) {
    return array("error"=>"error",
                 "message"=>"CODE: SCN0112",
                 "log"=>$e->getMessage()." CODE: SCN0112");
}
```

- `$db` : 변경하려는 DB의 이름

---

**function _querySelect($query, $parameters, $expectSingleResult = false)_**

```php
if ($this->connected) {
    if (is_string($query) && $query !== ""
        && is_array($parameters) && is_bool($expectSingleResult)) {

        try {
            $this->quer = $this->conn->prepare($query);
            $this->quer->execute($parameters);
            $results = ($expectSingleResult) ?
                        $this->quer->fetch() :
                        $this->quer->fetchAll();
            return $results;
        }
        catch (PDOException $e) {
            $this->error = $e->getMessage();
            return array("error"=>"error",
                         "message"=>"~: SCN0113",
                         "log"=>$this->error," CODE: SCN0113");
        }
    } else {
        $this->error = 'Invalid Query or Parameters';
        return array("error"=>"error",
                     "message"=>"~CODE: SCN0114",
                     "log"=>$this->error," CODE: SCN0114");
    }
} else {
    $this->error = 'Not Conneted to Database Server';
    return array("error"=>"error",
                 "message"=>"~: SCN0115",
                 "log"=>$this->error," CODE: SCN0115");
}
```

- `is_string($query) && $query !== ""
        && is_array($parameters) && is_bool($expectSingleResult)`
  - 파라미터를 받을 때 타입체크를 할 수 없어, 가장 먼저 들어온 파라미터의 타입을 점검함
- `$this->quer->fetch()` ? `$this->quer->fetchAll()`?
  - select해서 받는 결과가 항상 row 1개라면 fetch()를 사용, 2개 이상이라면 fetchAll()을 사용

---

**function _queryInsert($query, $parameters)_**

```php
if ($this->connected) {
    if (is_string($query) && $query !== "" && is_array($parameters)) {
        try {
            $this->quer = $this->conn->prepare($query);
            $results = $this->quer->execute($parameters);
            return $results;
        }
        catch (PDOException $e) {
            $this->error = $e->getMessage();
            return array("error"=>"error",
                         "message"=>"~: SCN0116",
                         "log"=>$this->error," CODE: SCN0116");
        }
    } else {
        $this->error = 'Invalid Query or Parameters';
        return array("error"=>"error",
                     "message"=>"~CODE: SCN0117",
                     "log"=>$this->error," CODE: SCN0117");
    }
} else {
    $this->error = 'Not Conneted to Database Server';
    return array("error"=>"error",
                 "message"=>"~: SCN0118",
                 "log"=>$this->error," CODE: SCN0118");
}
```

- insert, update 작업의 코드 구조는 동일함
  - `$this->quer->execute($parameters)` 자체를 return 함

---

PDO를 적용한 커넥션 사용하기
---

```php
private function selectTel() {
    $today = date("Y-m-d H:i:s");
    $sql = "SELECT tel
            FROM member
            WHERE user_code = :code";

    $q = $this->coopdb->querySelect($sql, array("code"=>$this->user_code));
    if ($q[error]) {
        return array("result"=>"error",
                    "message"=>$q[message],
                    "log"=> $q[log]." selectInformation()");
    }
}
```

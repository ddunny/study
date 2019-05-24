# merge request 로컬에서 작업하기
> GitLab 저장소에 올라온 Merge Request를 GitLab에서 처리하지 못하고, 로컬에서 작업해야 할 때가 있습니다. 이 경우에 어떤 명령어를 통해 로컬로 불러와 머지처리를 하면 되는지 확인해보겠습니다.

## 로컬로 가져오기 
> 207번(!207) Merge Request에서 발생하는 충돌을 로컬에서 처리해보기    
> *from **fix/login** to **develop***
``` shell
$git fetch origin   
$git checkout -b merge/mr-207 origin/fix/android-login  
```
```javascript 
// git checkout -b <새롭게 만들 브랜치> <충돌 처리할 원격 브랜치>
// 새롭게 만들 브랜치: 본인이 이름 정하기 나름
```
``` shell
$git checkout develop   
$git --no-diff merge/mr-207
```
```javascript
// 충돌 처리 후 (add, commit) 
```
```shell
$git push
```


---
## 또 다른 방법
> `$git fetch origin`을 할 때 GitLab 저장소에 존재하는 머지리퀘스트를 함께 fetch 할 수 있도록 config에 설정을 추가해줄 수 있습니다.   
> *원격에 존재하는 Merge Request가 많을수록 `$git fetch origin`의 실행속도가 느려진다는 단점이 있습니다.*

**Locate the section for your GitLab remote in the `.git/config` file. It looks like this:**

``` vi
[remote "origin"]
  url = https://gitlab.com/gitlab-org/gitlab-ce.git
  fetch = +refs/heads/*:refs/remotes/origin/*
  fetch = +refs/merge-requests/*/head:refs/remotes/origin/merge-requests/*

  # 위에 한줄을 추가해주세요.
```

**자세한 이용방법은 [GitLab 문서에서 확인하기](https://docs.gitlab.com/ee/user/project/merge_requests/#checkout-merge-requests-locally)**


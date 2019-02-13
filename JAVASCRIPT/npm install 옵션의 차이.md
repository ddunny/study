npm install 옵션의 차이
===

### npm(Node Package Manager)

#### 세계에서 가장 큰 소프트웨어 레지스트리(라이브러리)
- 800,000 개의 코드 패키지를 포함
- 오픈소스 개발자들은 자신이 만든 패키지를 공유하고 남이 만든 패키지를 사용하기 위해 npm을 사용
- 사용은 Free!
- 사용하기 위해서는 Node.js가 필요함

#### 의존성 관리
- npm은 의존성 관리가 가능함
- 의존성 모듈을 `package.json`에서 관리함
*npm은 프로젝트에 대한 설정을 `package.json`이라는 파일에 의존하고 이 파일에 JSON 형식으로 작성해서 프로젝트에 대한 관리를 할 수 있습니다.[참고](https://blog.outsider.ne.kr/665)*

#### CLI
- npm은 소프트웨어를 다운로드하고 설치할 수 있도록 CLI(Command Line Client)를 포함하고 있음


### npm-install
이 명령어를 이용하여 패키지를 설치합니다. 패키지가 package-lock 이나 shrinkwrap 파일을 가지고 있는 경우 의존성 설치가 실행되며, 두 파일이 모두 있는 경우에는 npm-shringwrap.json 파일이 우선합니다.    
로컬 node_modules 폴더(./node_modules)에 패키지를 설정합니다.
자세한 이용방법은 [여기](https://docs.npmjs.com/cli/install)에서 확인할 수 있습니다.

``` javascript
alias: npm i
common options: [-P|--save-prod|-D|--save-dev|-O|--save-optional] [-E|--save-exact] [-B|--save-bundle] [--no-save] [--dry-run]
```

## npm install (plugin) --save
- 패키지를 node_modules 디렉터리에 설치하고 package.json 파일의 `dependencies` 항목에 플러그인 정보가 저장됨   
- --production 빌드시 해당 플러그인이 포함됨

`package.json`
```javascript
...
"dependencies": {
    "@angular/common": "5.0.3",
    "@angular/compiler": "5.0.3",
    "@angular/compiler-cli": "5.0.3"
}
...
```

## npm install (plugin) --save-dev
- 패키지를 node_modules 디렉터리에 설치하고 package.json 파일의 `devDependencies` 항목에 플러그인 정보가 저장됨
- --production 빌드시 해당 플러그인이 포함되지 않음   

`package.json`
```javascript
...
"devDependencies": {
    "@angular-devkit/build-optimizer": "^0.5.7",
    "@ionic/app-scripts": "3.1.8"
}
...
```



> 참고 사이트   
> https://ko.wikipedia.org/wiki/Npm_(%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4)
> https://www.w3schools.com/whatis/whatis_npm.asp
> https://blog.outsider.ne.kr/1228
> https://ithub.tistory.com/165


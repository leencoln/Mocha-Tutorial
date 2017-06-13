# Mocha 시작하기

## Mocha 설치
**Mocha**를 설치하기 위해서는 먼저 Node.js와 npm이 설치되어 있어야 합니다. 
본문에는 Node.js와 npm 설치 방법을 제외하고 시작하도록 하겠습니다.
Node.js와 npm을 설치하였다면 적당한 프로젝트 폴더를 생성합니다. 여기서는 `Mocha_test`라고 하겠습니다.

```
$ C:\Mocha_test
```

생성된 경로에 npm 명령어를 통해 `package.json`을 생성합니다.

```
$ npm init
```

이제 `package.json`이 생성되었으니 본격적으로 ` mocha`를 설치하겠습니다. `mocha`를 설치 할 때에는 `-g` 옵션을 붙혀서 global하게 
설치해도 됩니다.

```
$ npm install mocha --save-dev 또는 npm i -g mocha
```
`--save-dev` 옵션을 주었기에 `package.json`에 `devDependencies`에서 `mocha`가 추가되어 있는 것을 볼 수 있습니다.
`mocha`가 정상적으로 설치가 되어 있는지 확인하기 위해서는 다음과 같이 실행합니다.

```
$ mocha --version 또는 mocha -V
```
`mocha`와 관련된 옵션은 `mocha -h`를 통해 확인 할 수 있습니다. 이제 `mocha` 설치까지 끝났으니 본격적으로 `mocha`를 사용할 때입니다.
아래에 단계별로 예제를 업로드하였습니다. 아래 예제를 통해서 각 단계별로 `mocha`의 사용법을 익힐 수 있습니다.


- - -
# Mocha Tutorial

* [Step 01: Hello World!](https://github.com/kdydesign/Mocha-Tutorial/tree/master/step01-Hello%20World!)
* [Step 02: Assertion-chai](https://github.com/kdydesign/Mocha-Tutorial/tree/master/step02-chai)
* [Step 03: Hooks](https://github.com/kdydesign/Mocha-Tutorial/tree/master/step03-Hooks)
* [Step 04: 비동기 처리](https://github.com/kdydesign/Mocha-Tutorial/tree/master/step04-Asynchronous)
* [Step 05: 외부 모듈 테스트](https://github.com/kdydesign/Mocha-Tutorial/tree/master/step05-Import%20Modules)
* [Step 06: 브라우저에서의 Mocha 지원](https://github.com/kdydesign/Mocha-Tutorial/tree/master/step02-chai)
* [Step 07: Options](https://github.com/kdydesign/Mocha-Tutorial/tree/master/step02-chai)
* [Step 08: IDE Edit Plug-in (IntelliJ)](https://github.com/kdydesign/Mocha-Tutorial/tree/master/step02-chai)
* [Step 09: Mocha로 실제 TDD 해보기](https://github.com/kdydesign/Mocha-Tutorial/tree/master/step02-chai)

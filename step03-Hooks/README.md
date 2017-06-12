# Step 02. Hooks

이번 Tutorial에서는 `mocha`의 `Hooks`를 알아 보겠습니다. *`mocha`에서는 테스트들의 전제 조건과 후 조건을 미리 설정할 수 있는 `Hooks`를 지원*합니다.
`mocha`에서는 기본적으로 `BDD`스타일을 지원하지만 `TDD` 스타일도 역시 지원하기 때문에 이 두 스타일에 대한 `Hooks`도 정의할 수 있습니다.
먼저 `Hooks`를 살펴보겠습니다.

## 기본 Hooks
`mocha`의 기본 `BDD` 스타일의 `Hooks`는 다음과 같이 정의 할 수 있습니다.

```javascript
describe('#Hooks', function(){
   before(function(){
        // runs before all tests in this block            
   });
   
   after(function(){
        // runs after all tests in this block
   });
   
   beforeEach(function() {
        // runs before each test in this block
   });
   
   afterEach(function() {
        // runs after each test in this block
   });
   
   it('test', function(){
        // test case 
   });
});
```
간단합니다. 주석을 보면 알겠지만 `mocha`에서는 `before()`, `after()`, `beforeEach()`, `afterEach()` 4가지의 `Hooks`를 지원합니다.
<br/>
여기서 `before()`, `after()`는 테스트 스위트 단위(`describe`)로 실행됩니다. `before()`는 각 테스트 스위트가 실행되기 전에 실행하고 `after()`는 각 테스트 스위트가 종료되고 실행됩니다.
<br/>
`beforeEach()`, `afterEach()`는 어떨까요? 이 두개의 `Hooks`는 테스트 스위트가 아닌 테스트 케이스 단위(`it`)로 실행됩니다. `beforeEach()`는 각 테스트 케이스가 실행하기 전에 실행되고  `afterEach()` 반대로 테스트 케이스가 종료 후에 실행됩니다.
 
<br/>

이 `Hooks`들은 적절하게 정의 된 순서대로 실행을 합니다.
<br/>
모든 `before()` Hook가 한 번 실행 한 후 모든 `beforeEach()` Hook와 테스트 케이스(`it`)가 실행됩니다. 이 후 모든 `afterEach()` Hook를 실행하고 마지막으로 `after()` Hook를 한 번 실행하게 됩니다.
<br/>
아래 코드를 보겠습니다.

```javascript
describe('#Hooks', function () {
    before(function () {
        console.log('before');
    });

    after(function () {
        console.log('after');
    });

    beforeEach(function () {
        console.log('beforeEach');
    });

    afterEach(function () {
        console.log('afterEach');
    });

    it('test case #1', function () {
        console.log('test case #1');
    });

    it('test case #2', function () {
        console.log('test case #2');
    })
});
```

해당 코드를 실행하게 되면 초기에 `before()`이 실행이 되고 이후 `beforeEach()` 그리고 테스트 케이스(`it`)이 실행됩니다. 그리고 테스트 케이스(`it`)이 종료되면 `afterEach()`가 실행되고 또 다시 테스트 케이스(`it`)을 위해 반복적으로 `beforeEach()`와 `afterEach()`가 실행되며, 마지막으로 `after()`가 실행되는 것을 볼 수 있습니다.

## Hooks 설명
 
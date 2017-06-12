
//기본 Hooks
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

//Hooks 설명
describe('#Describing Hooks', function () {
    beforeEach(function() {
        // beforeEach hook
    });

    beforeEach(function namedFun() {
        // beforeEach:namedFun
    });

    beforeEach('some description', function() {
        // beforeEach:some description
    });
});

//TDD Style의 Hooks
//mocha test --ui tdd
suite('#Hooks', function(){
    suiteSetup(function(){
        // runs before all tests in this block
    });

    suiteTeardown(function(){
        // runs after all tests in this block
    });

    setup(function() {
        // runs before each test in this block
    });

    teardown(function() {
        // runs after each test in this block
    });

    test('test', function(){
        // test case
    });
});

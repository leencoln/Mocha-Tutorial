var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();

describe('#Expect Test', function () {
    it('expect - Array', function () {
        var arr = [1, 2, 5, 3, 4];

        expect(arr).to.have.lengthOf(5);                        //array length
        expect(arr).to.be.not.empty;                            //empty
        expect(arr).to.have.ordered.members([1, 2, 5, 3, 4]);   //arr === members
    });

    it('expect - String', function () {
        var str = 'Awesome!!';

        expect(str).to.be.a('String');                  //str type
        expect(str).to.equal('Awesome!!');              //str === 'Awesome!!'
        expect(str).to.have.lengthOf(7, 'Why fail?');   //Error
    });

    it('expect - Object', function () {
        var obj = {
            assertion: ['assert', 'expect', 'should'],
            framework: 'mocha'
        };

        expect(obj).to.have.property('assertion').with.lengthOf(3);     //assertion value length
        expect(obj).to.have.all.keys('framework', 'assertion');         //obj key === keys
    });
});

describe('#Should Test', function () {
    it('should - Array', function () {
        var arr = [1, 2, 5, 3, 4];

        arr.should.have.lengthOf(5);                        //array length
        arr.should.be.not.empty;                            //empty
        arr.should.have.ordered.members([1, 2, 5, 3, 4]);   //arr === members
    });

    it('should - String', function () {
        var str = 'Awesome!!';

        str.should.be.a('String');                  //str type
        str.should.equal('Awesome!!');              //str === 'Awesome!!'
        str.should.have.lengthOf(7, 'Why fail?');   //Error
    });

    it('should - Object', function () {
        var obj = {
            assertion: ['assert', 'expect', 'should'],
            framework: 'mocha'
        };

        obj.should.have.property('assertion').with.lengthOf(3);     //assertion value length
        obj.should.have.all.keys('framework', 'assertion');         //obj key === keys
    });
});

describe('#Assert Test', function () {
    it('assert - Array', function () {
        var str = 'Awesome!!';
        var obj = {
            assertion: ['assert', 'expect', 'should'],
            framework: 'mocha'
        };

        assert.equal(str, 'Awesome!!');         //str === 'Awesome!!'
        assert.typeOf(str, 'String');           //str type
        assert.lengthOf(obj.assertion, 3);      //assertion value length
    });
});
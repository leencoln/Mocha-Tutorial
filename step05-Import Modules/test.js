var chai = require('chai'),
    moduleSum = require('./ModuleSum'),
    expect = chai.expect;

describe('#ModuleSum', function () {
    it("sum()", function () {
        expect(moduleSum.sum(1, 2)).to.equal(3);
        expect(moduleSum.sum(3, 2)).to.equal(5);
        expect(moduleSum.sum(5, 0)).to.equal(5);
    })
});
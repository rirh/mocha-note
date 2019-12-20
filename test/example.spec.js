var request = require('superagent');
var expect = require('chai').expect;

describe("test number type", function () {
    it('should be number', function () {
        expect(4 + 5).to.be.equal(9);
    });
});

describe("test boolen type", function () {
    it('should be true', function () {
        expect(true).to.be.ok;

    });
    it('should be false', function () {
        expect(false).to.not.be.ok;
    });
});


describe("test typeof ", function () {
    it('should be string', function () {
        expect('test').to.be.an('string');
    });
    it('should be object', function () {
        expect({ foo: 'bar' }).to.be.an('object');
    });
});

describe("test empty ", function () {
    it('should be empty', function () {
        expect([]).to.be.empty;
    });
    it('should be empty', function () {
        expect('').to.be.empty;
    });
    it('should be empty', function () {
        expect({}).to.be.empty;
    });
});

describe("test match ", function () {
    it('should has foo', function () {
        expect('foobar').to.match(/^foo/);
    });

});

describe("test async API", function () {
    it('statusCode should be 200 ', function (done) {
        request
            .get('http://api.huzhihui.org.cn/doc')
            .end(function (err, res) {
                expect(res.statusCode).to.be.equal(200);
                done();
            });
    });
});
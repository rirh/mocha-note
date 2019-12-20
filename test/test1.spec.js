/**
 * 使用
 */
var expect = require('chai').expect;
var borads = require('../src/test1')


describe('test1', function () {
  it('case1', function () {
    var input = ['oxo', 'xxx', 'oxo']
    var result = borads(input)
    expect(result).to.equal(false);
  });
  it('case2', function () {
    var input = ['', '', '']
    var result = borads(input)
    expect(result).to.equal(false);
  });
  it('case3', function () {
    var input = ['ooo', ' ', ' ']
    var result = borads(input)
    expect(result).to.equal(true);
  });
  it('case4', function () {
    var input = ['oxo', 'xxx', ' ']
    var result = borads(input)
    expect(result).to.equal(true);
  });
  it('case5', function () {
    var input = ['ooo', 'xxx', ' ']
    var result = borads(input)
    expect(result).to.equal(false);
  });
  it('case6', function () {
    var input = ['oxo', 'xox', 'oxo']
    var result = borads(input)
    expect(result).to.equal(false);
  });
  it('case7', function () {
    var input = ['xxx', 'xxx', 'xxx']
    var result = borads(input)
    expect(result).to.equal(false);
  });
  it('case8', function () {
    var input = ['ooo', 'ooo', 'ooo']
    var result = borads(input)
    expect(result).to.equal(false);
  });
})


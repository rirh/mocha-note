/**
 * 使用
 */
var expect = require('chai').expect;
var fun = require('../src/test2')


describe('test2', function () {
  it('case1', function () {
    var input = [-8, -7, -6, -5, -4, -3, -2, 1 - 1, 1, -1, 1, 0, 2, 3, 4, 5, 6, 7, 8]
    var result = fun(input)
    console.log(result);

    expect(result).to.deep.equal(

      [[-4, -3, 7],
      [-5, -2, 7],
      [-4, -2, 6],
      [-3, -2, 5],
      [-7, 0, 7],
      [-6, 0, 6],
      [-5, 0, 5],
      [-4, 0, 4],
      [-3, 0, 3],
      [-2, 0, 2],
      [-8, 1, 7],
      [-7, 1, 6],
      [-6, 1, 5],
      [-5, 1, 4],
      [-4, 1, 3],
      [-3, 1, 2],
      [-2, 1, 1],
      [-1, 0, 1],
      [-6, -1, 7],
      [-5, -1, 6],
      [-4, -1, 5],
      [-3, -1, 4],
      [-2, -1, 3],
      [0, 0, 0],
      [-8, 2, 6],
      [-7, 2, 5],
      [-6, 2, 4],
      [-5, 2, 3],
      [-4, 2, 2],
      [-8, 3, 5],
      [-7, 3, 4],
      [-6, 3, 3],
      [-8, 4, 4]]
    );
  });
  it('case2', function () {
    var input = [-2, -1, 0, 1, 2]
    var result = fun(input)
    expect(result).to.deep.equal([[-1, 0, 1], [-2, 1, 1]]);
  });
  it('case3', function () {
    var input = [-1, 1, 0, 2]
    var result = fun(input)
    expect(result).to.deep.equal([[-1, 0, 1]]);
  });
  it('case4', function () {
    var input = [-1, 1, 0, 2]
    var result = fun(input)
    expect(result).to.deep.equal([[-1, 0, 1]]);
  });
  it('case5', function () {
    var input = [-1, 1, 0, 2]
    var result = fun(input)
    expect(result).to.deep.equal([[-1, 0, 1]]);
  });
  it('case6', function () {
    var input = [-1, 1, 0, 2]
    var result = fun(input)
    expect(result).to.deep.equal([[-1, 0, 1]]);
  });
  it('case7', function () {
    var input = [-1, 1, 0, 2]
    var result = fun(input)
    expect(result).to.deep.equal([[-1, 0, 1]]);
  });
  it('case8', function () {
    var input = [-1, 1, 0, 2]
    var result = fun(input)
    expect(result).to.deep.equal([[-1, 0, 1]]);
  });
})



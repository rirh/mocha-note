##### Mocha 

[mocha官网](https://mochajs.org/)

驱动测试开发（TDD：Test-Driven Development）

单元测试是用来对一个模块、一个函数或者一个类来进行正确性检验的测试工作

**快速使用：**

```javascript
vscode 安装插件 mocha sildebar
打开测试页面运行测试用例
```

**特点：**

1. 自动运行所有测试
2. 测试函数或者类
3. 既可以全局测试也可以指定测试
4. 支持befor after beforEach 和 afterEach 生命周期钩子函数
5. 可进行异步的http测试

断言判断类型

```javascript
var expect = require('chai').expect;

// 相等或不相等
expect(4 + 5).to.be.equal(9);
expect(4 + 5).to.be.not.equal(10);
expect(foo).to.be.deep.equal({ bar: 'baz' });

// 布尔值为true
expect('everthing').to.be.ok;
expect(false).to.not.be.ok;

// typeof
expect('test').to.be.a('string');
expect({ foo: 'bar' }).to.be.an('object');
expect(foo).to.be.an.instanceof(Foo);

// include
expect([1,2,3]).to.include(2);
expect('foobar').to.contain('foo');
expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');

// empty
expect([]).to.be.empty;
expect('').to.be.empty;
expect({}).to.be.empty;

// match
expect('foobar').to.match(/^foo/);

```


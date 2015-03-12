var assert = require('chai').assert,
	sinon = require('sinon'),
	TestClass = require('../libs/test');

suite('test project', function() {
	setup(function() {
		this.sandbox = sinon.sandbox.create();
		this.clock = this.sandbox.useFakeTimers();
		this.testClass = new TestClass();
	});

	test('1.1 - is string', function() {
		assert.isTrue(this.testClass.isString('s'));
	});

	test('1.2 - not string', function() {
		assert.isFalse(this.testClass.isString(1.2));
	});

	test('1.3 - not string', function() {
		assert.isFalse(this.testClass.isString(['1', 2]));
	});

	test('1.4 - result is array', function() {
		assert.isTrue(Array.isArray(this.testClass.string2Array('s')));
	});

	teardown(function() {
	});
});

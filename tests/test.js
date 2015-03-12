var assert = require('chai').assert,
	sinon = require('sinon'),
	TestClass = require('../libs/test');

suite('test project', function() {
	setup(function() {
		this.sandbox = sinon.sandbox.create();
		this.clock = this.sandbox.useFakeTimers();
		this.testClass = new TestClass();
	});

	test('1.1 - only string', function() {
		assert.isTrue(this.testClass.isString('s'));
	});

	teardown(function() {
	});
});

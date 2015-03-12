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
		assert.isTrue(Array.isArray(this.testClass.multiString2Array('s')));
	});

	test('1.5 - a,b,c', function() {
		assert.deepEqual(this.testClass.multiString2Array('a,b,c'), ['a', 'b', 'c']);
	});

	test('1.6 - 100,982,444,990,1', function() {
		assert.deepEqual(this.testClass.multiString2Array('100,982,444,990,1'), ['100', '982', '444', '990', '1']);
	});

	test('1.7 - Mark,Anthony,marka@lib.d', function() {
		assert.deepEqual(this.testClass.multiString2Array('Mark,Anthony,marka@lib.d'), ['Mark', 'Anthony', 'marka@lib.d']);
	});

	test('2.1 - 211,22,35\n10,20,33', function() {
		assert.deepEqual(this.testClass.multiString2Array('211,22,35\n10,20,33'), [['211','22','35'],['10','20','33']]);
	});

	test('2.2 - luxembourg,kennedy,44\nbudapest,expo ter,5-7\ngyors,fo utca,9', function() {
		assert.deepEqual(this.testClass.multiString2Array('luxembourg,kennedy,44\nbudapest,expo ter,5-7\ngyors,fo utca,9'), [['luxembourg','kennedy','44'],['budapest','expo ter','5-7'],['gyors','fo utca','9']]);
	});

	test('2.2 - 1\n2,2\n3,3,3', function() {
		assert.deepEqual(this.testClass.multiString2Array('1\n2,2\n3,3,3'), [['1'],['2','2'],['3','3','3']]);
	});

	test('3.1 - #useFirstLineAsLabels\nName,Email,Phone\nMark,marc@be.com,998\nNoemi,noemi@ac.co.uk,888', function() {
		assert.deepEqual(this.testClass.multiString2ArrayObject('#useFirstLineAsLabels\nName,Email,Phone\nMark,marc@be.com,998\nNoemi,noemi@ac.co.uk,888'),
		{'labels': ['Name', 'Email', 'Phone'], 'data': [['Mark','marc@be.com','998'], ['Noemi','noemi@ac.co.uk','888']]});
	});


	teardown(function() {
	});
});

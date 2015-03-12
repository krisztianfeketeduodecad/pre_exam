/**
 * TestClass.
 *
 * @constructor
 */
var TestClass = function() {
	this.a = 0;
};

TestClass.prototype.string2Array = function(input) {
	var result = ["a"];

	return result;
};


TestClass.prototype.isString = function(input) {
	return typeof input === 'string';
};

module.exports = TestClass;

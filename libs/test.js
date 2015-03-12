/**
 * TestClass.
 *
 * @constructor
 */
var TestClass = function() {
	this.a = 0;
};


TestClass.prototype.isString = function(input) {
	return typeof input === 'string';
};

module.exports = TestClass;

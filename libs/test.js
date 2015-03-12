/**
 * TestClass.
 *
 * @constructor
 */
var TestClass = function() {
	this.a = 0;
};

TestClass.prototype.multiString2Array = function(input) {
	var result;
	if (input.indexOf('\n') != -1) {
		result = input.split('\n');
		for(var i=0; i < result.length; i++) {
			result[i] = this.string2Array(result[i]);
		}
	} else {
		result = this.string2Array(input);
	}
	return result;
};

TestClass.prototype.string2Array = function(input) {
	var result = input.split(',');
	return result;
};


TestClass.prototype.isString = function(input) {
	return typeof input === 'string';
};

module.exports = TestClass;

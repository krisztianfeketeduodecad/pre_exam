/**
 * TestClass.
 *
 * @constructor
 */
var TestClass = function() {
	this.useFirstLineAsLabels = false;
	this.lineDelimeter = '\n';
	this.columnDelimeter = ',';
};

TestClass.prototype.multiString2ArrayObject = function(input) {
	var data,labels,
		result = {};
	if (input.indexOf('\n') != -1) {
		data = input.split('\n');
		if (data[0] === '#useFirstLineAsLabels') {
			data.shift();
			result['labels'] = this.string2Array(data.shift());
		}
		result['data'] =[];
		for(var i=0; i < data.length; i++) {
			result['data'][i] = this.string2Array(data[i]);
		}
	} else {
		result = this.string2Array(input);
	}
	return result;
};

TestClass.prototype.parseFirstLine = function(input) {
	if (input[0] == '#') {
		var result = /#useFirstLineAsLabels=([0|1])&columnDelimiter=(.)&lineDelimiter=(.*)/.exec(input);
		if (result) {
			this.useFirstLineAsLabels = !!result[1];
			this.columnDelimeter = result[2];
			this.lineDelimeter = result[3];
		}
	}
}

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

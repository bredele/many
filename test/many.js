
/**
 * Test dependencies.
 */

var assert = require('assert');
var many = require('..');

describe('basic', function() {

	it('should call once', function() {
		var fn = many(function(name, data) {
			assert.equal(name, 'olivier');
			assert.equal(data.foo, 'bar');
		});

		fn('olivier', {
			foo: 'bar'
		});
	});

	it('should call once or many times', function() {
		var fn = many(function(name, data) {
			assert.equal(name, 'olivier');
			assert.equal(data.foo, 'bar');
		});

		fn({
			'olivier' : {
				foo: 'bar'
			}
		});
	});

});

/**
 * Module dependencies.
 * @api private
 */

var loop = require('looping');


/**
 * Expose many constructor.
 * @api public
 */

module.exports = function(fn) {
	var many = function(str) {
		if(typeof str === 'string') {
			fn.apply(this, arguments);
		} else {
			loop(str, many);
		}
	};
	return many;
};

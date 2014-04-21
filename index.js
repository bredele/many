
/**
 * Expose many constructor.
 * @api public
 */

module.exports = function(fn) {
	var many = function(str) {
		if(typeof str === 'string') {
			fn.apply(this, arguments);
		} else {

		}
	};
	return many;
};

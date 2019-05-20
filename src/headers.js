/**
 * @file src/headers.js
 */
'use strict';

/**
 * Joins an Array of HTTP header strings into a single string.
 * @param  {Array.<String>} arr
 * @return {String}
 * @private
 */
module.exports = (arr) => [ ...arr, '\r\n' ].join('\r\n');

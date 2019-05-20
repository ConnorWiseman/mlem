/**
 * @file src/headers/abort.js
 */
'use strict';

const join = require('./join');

/**
 * Given a particular HTTP status code {code} and message {msg}, generates the
 * appropriate headers for aborting an incoming WebSocket connection before it
 * can upgrade to the WebSocket protocol.
 * @param  {Number} [code=400]
 * @param  {String} [msg='Bad  Request']
 * @return {String}
 * @private
 */
module.exports = (code = 400, msg = 'Bad Request') => join([
  `HTTP/1.1 ${code} ${msg}`,
  'Connection: close',
  `Content-Length: ${Buffer.byteLength(msg)}`
]);

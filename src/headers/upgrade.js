/**
 * @file src/headers/upgrade.js
 */
'use strict';

const accept = require('./accept');
const join   = require('./join');

/**
 * Given a client's `Sec-WebSocket-Key` header {key}, generates the appropriate
 * headers for upgrading the connection to the WebSocket protocol.
 * @param  {String} key
 * @return {String}
 * @private
 */
module.exports = (key) => join([
  'HTTP/1.1 101 Switching Protocols',
  'Upgrade: websocket',
  'Connection: Upgrade',
  `Sec-WebSocket-Accept: ${accept(key)}`
]);

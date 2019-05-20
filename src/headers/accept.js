/**
 * @file src/headers/accept.js
 */
'use strict';

const { createHash } = require('crypto');

/**
 * Creates the server response to the client `Sec-WebSocket-Key` header.
 * @param  {String} key
 * @return {String}
 * @private
 */
module.exports = (key) =>
  createHash('sha1')
    .update(`${key}258EAFA5-E914-47DA-95CA-C5AB0DC85B11`, 'binary')
    .digest('base64');

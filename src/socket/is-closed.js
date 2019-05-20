/**
 * @file src/socket/is-closed.js
 */
'use strict';

/**
 * Returns `true` if a given {socket} is not readable or writable.
 * @param  {net.Socket} socket
 * @return {Boolean}
 * @private
 */
module.exports = (socket) => !socket.readable || !socket.writable;

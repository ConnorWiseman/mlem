/**
 * @file test/socket/is-closed.spec.js
 */
'use strict';

const test = require('ava');

const isClosed = require('../../src/socket/is-closed.js');

test('should be a function', t => {
  t.true(typeof isClosed === 'function');
});

test('should return a boolean', t => {
  t.true(typeof isClosed({}) === 'boolean');
});

test('should return `true` if `socket.readable` is `false`', t => {
  t.true(isClosed({ readable: false, writable: true }));
});

test('should return `true` if `socket.writable` is `false`', t => {
  t.true(isClosed({ readable: true, writable: false }));
});

test('should return `true` if both `socket.readable` and `socket.writable` are `false`', t => {
  t.true(isClosed({ readable: false, writable: false }));
});

test('should return `false` if neither `socket.readable` and `socket.writable` are `false`', t => {
  t.false(isClosed({ readable: true, writable: true }));
});

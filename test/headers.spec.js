/**
 * @file test/headers.spec.js
 */
'use strict';

const test = require('ava');

const headers = require('../src/headers.js');

test('should be a function', t => {
  t.true(typeof headers === 'function');
});

test('should return a string', t => {
  t.true(typeof headers([]) === 'string');
});

test('should append `\r\n` to end of result', t => {
  t.true(headers([]) === '\r\n');
});

test('should join array contents with `\r\n`', t => {
  t.true(headers([ 'first', 'second' ]) === 'first\r\nsecond\r\n\r\n');
});

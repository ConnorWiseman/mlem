/**
 * @file test/headers/join.spec.js
 */
'use strict';

const test = require('ava');

const join = require('../../src/headers/join.js');

test('should be a function', t => {
  t.true(typeof join === 'function');
});

test('should return a string', t => {
  t.true(typeof join([]) === 'string');
});

test('should append `\r\n` to end of result', t => {
  t.true(join([]) === '\r\n');
});

test('should join array contents with `\r\n`', t => {
  t.true(join([ 'first', 'second' ]) === 'first\r\nsecond\r\n\r\n');
});

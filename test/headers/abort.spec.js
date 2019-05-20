/**
 * @file test/headers/abort.spec.js
 */
'use strict';

const test = require('ava');

const abort = require('../../src/headers/abort.js');

test('should be a function', t => {
  t.true(typeof abort === 'function');
});

test('should return a string', t => {
  t.true(typeof abort() === 'string');
});

test('should default to HTTP code 400', t => {
  t.true(abort().includes('400 Bad Request'));
});

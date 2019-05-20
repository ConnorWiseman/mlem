/**
 * @file test/headers/upgrade.spec.js
 */
'use strict';

const test = require('ava');

const upgrade = require('../../src/headers/upgrade.js');

test('should be a function', t => {
  t.true(typeof upgrade === 'function');
});

test('should return a string', t => {
  t.true(typeof upgrade('key') === 'string');
});

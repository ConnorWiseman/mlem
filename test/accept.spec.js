/**
 * @file test/accept.spec.js
 */
'use strict';

const test       = require('ava');
const proxyquire = require('proxyquire');
const sinon      = require('sinon');

/**
 * A stub object used to test reliance on the `crypto` module.
 * @type {Object}
 * @private
 */
const hash = Object.create(null);

hash.update = sinon.stub().callsFake(key => {
  hash.key = key;
  return hash;
});

hash.digest = sinon.stub().returns('digest');

/**
 * A stub object used to test reliance on the `crypto` module.
 * @type {Object}
 * @private
 */
const crypto = Object.create(null);

crypto.createHash = sinon.stub().returns(hash);

// The file being tested.
const accept = proxyquire('../src/accept.js', { crypto });

test.afterEach(t => {
  crypto.createHash.resetHistory();
  hash.update.resetHistory();
  hash.digest.resetHistory();
});

test.serial('should be a function', t => {
  t.true(typeof accept === 'function');
});

test.serial('should return a string', t => {
  t.true(typeof accept('key') === 'string');
});

test.serial('should call `crypto.createHash`', t => {
  accept('key');
  t.true(crypto.createHash.calledOnce);
});

test.serial('should call the resulting hash object\'s `update` method',  t => {
  accept('key');
  t.true(hash.update.calledOnce);
});

test.serial('should append the WebSocket GUID to the specified key',  t => {
  accept('key');
  t.true(hash.update.calledOnce);
  t.true(hash.key === 'key258EAFA5-E914-47DA-95CA-C5AB0DC85B11');
});

test.serial('should call the resulting hash object\'s `digest` method',  t => {
  accept('key');
  t.true(hash.digest.calledOnce);
});

test.serial('should call specify a base64-encoded digest',  t => {
  accept('key');
  t.true(hash.digest.calledWithExactly('base64'));
});

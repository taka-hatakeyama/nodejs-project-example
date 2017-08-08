/**
 * @file index.js
 * Contains a simple test for the addition method in index.js.
 */


import test from 'ava';
import add from '../index';

test('Can add two numbers', t => {
  t.plan(1);
  t.is(add(1, 1), 2);
});

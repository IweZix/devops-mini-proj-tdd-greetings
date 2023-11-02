/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
const { test, expect } = require('@jest/globals');

const greet = require('./app');

test('should return "Hello name"', () => {
  const result = greet('Luca');
  expect(result).toEqual('Hello, Luca.');
});

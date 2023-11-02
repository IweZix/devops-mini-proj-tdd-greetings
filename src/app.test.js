/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
const { test, expect } = require('@jest/globals');

const greet = require('./app');

// 1
test('should return "Hello, Luca."', () => {
  const result = greet('Luca');
  expect(result).toEqual('Hello, Luca.');
});

// 2
test('should return "Hello, my friends"', () => {
  const result = greet(null);
  expect(result).toEqual('Hello, my friend.');
});

test('should return "Hello, my friends"', () => {
  const result = greet(undefined);
  expect(result).toEqual('Hello, my friend.');
});

test('should return "Hello, my friends"', () => {
  const result = greet('');
  expect(result).toEqual('Hello, my friend.');
});

// 3
test('should return "HELLO, JERRY!"', () => {
  const result = greet('JERRY');
  expect(result).toEqual('HELLO, JERRY!');
});

/* eslint-disable linebreak-style */
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

// 4
test('should return "Hello, Jill and Jane."', () => {
  const result = greet(['Jill', 'Jane']);
  expect(result).toEqual('Hello, Jill and Jane.');
});

// 5
test('should return "Hello, Amy, Brian, and Charlotte."', () => {
  const result = greet(['Amy', 'Brian', 'Charlotte']);
  expect(result).toEqual('Hello, Amy, Brian, and Charlotte.');
});

// 6
test('should return "Hello, Amy and Charlotte. AND HELLO BRIAN!"', () => {
  const result = greet(['Amy', 'BRIAN', 'Charlotte']);
  expect(result).toEqual('Hello, Amy and Charlotte. AND HELLO BRIAN !');
});

test('should return false', () => {
  const result = greet(['Amy', 'BRIAN', 'CHARLOTTE']);
  expect(result).toEqual(false);
});

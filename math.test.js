const add = require('./math');

test('adds numbers correctly', () => {
  expect(add(2, 3)).toBe(5);
});

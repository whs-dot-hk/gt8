test('should contain Leon', () => {
  const result = require('./test1.json');
  expect(result).toBe(1);
});

test('should not contain Prison Break', () => {
  const result = require('./test2.json');
  expect(result).toBe(0);
});

test('should contain Citizen Kane', () => {
  const result = require('./test3.json');
  expect(result).toBe(1);
});



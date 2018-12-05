const fetch = require('node-fetch');

test('should contain Shawshank Redemption', () => {
  expect.assertions(1);
  return fetch('http://localhost:3000/tt0111161/')
    .then(res => res.json())
    .then(json => expect(json).toBe(1));
});

test('should not contain Prison Break', () => {
  expect.assertions(1);
  return fetch('http://localhost:3000/tt0455275/')
    .then(res => res.json())
    .then(data => expect(data).toBe(0));
});


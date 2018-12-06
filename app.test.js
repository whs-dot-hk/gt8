test('should contain Leon', () => {
  try {
    const result = require('./test1.json')
    expect(result).toBe(1);
  } catch(e) {
    if (e.code !== 'MODULE_NOT_FOUND') {
      throw e
    }
  }
});

test('should not contain Prison Break', () => {
  try {
    const result = require('./test2.json')
    expect(result).toBe(0);
  } catch(e) {
    if (e.code !== 'MODULE_NOT_FOUND') {
      throw e
    }
  }
});


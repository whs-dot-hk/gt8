const { exec } = require('child_process');

test('filter single id', done => {
  function callback(err, data, stderr) {
    expect(data).toBe('tt0000009\t5.5\t72\n');
    done();
  }

  exec('awk -f redis-seed/filter.awk ids=redis-seed/test/t1_a1 redis-seed/test/t1_a2', callback);
});

test('filter multiple ids', done => {
  function callback(err, data, stderr) {
    expect(data).toBe('tt0000005\t6.2\t1727\ntt0000007\t5.5\t576\ntt0000008\t5.6\t1535\ntt0000009\t5.5\t72\n');
    done();
  }

  exec('awk -f redis-seed/filter.awk ids=redis-seed/test/t2_a1 redis-seed/test/t2_a2', callback);
});


test('missing ratings', done => {
  function callback(err, data, stderr) {
    expect(data).toBe('tt0000005\t6.2\t1727\ntt0000009\t5.5\t72\n');
    done();
  }

  exec('awk -f redis-seed/filter.awk ids=redis-seed/test/t3_a1 redis-seed/test/t3_a2', callback);
});
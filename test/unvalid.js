var test = require('tape');
var Parser = require('../');

test('unvalid', function (t) {
  var count = 0;

  var p = new Parser();
  p.onError = function (value) {
    count++;
    t.equal(1, count);
    t.end();
  };

  p.write('{"test": eer[');
});

test('unvalid value', function (t) {
  var count = 0

  var p = new Parser();
  p.onValue = function (value) {
    if (count++ === 0) {
      t.deepEqual(value, "bar");
    } else {
      t.deepEqual(value, {"foo":"bar"});
      t.end()
    }
  };

  p.write('{"test": , "foo": "bar"}');
});

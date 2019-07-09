import extractServerError from 'rarwe/utils/extract-server-error';
import { module, test } from 'qunit';

module('Unit | Utility | extract-server-error', function(hooks) {

  // Replace this with your real tests.
  test('it works', function(assert) {
    let result = extractServerError();
    assert.ok(result);
  });
});

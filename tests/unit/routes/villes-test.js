import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | villes', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:villes');
    assert.ok(route);
  });
});

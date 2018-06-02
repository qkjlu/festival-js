import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | festivals/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:festivals/edit');
    assert.ok(route);
  });
});

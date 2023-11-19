import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proba-3-квартира', 'Unit | Model | i-i-s-proba-3-квартира', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-proba-3-квартира',
    'model:i-i-s-proba-3-улица',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});

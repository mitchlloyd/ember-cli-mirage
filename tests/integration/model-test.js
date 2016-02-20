import Db from 'ember-cli-mirage/db';
import Schema from 'ember-cli-mirage/orm/schema';
import Model from 'ember-cli-mirage/orm/model';
import {module, test} from 'qunit';
import Ember from 'ember';

module('Integration | Model');

test('Ember.get() retrieves an attribute', function(assert) {
  let schema = new Schema(new Db());
  schema.registerModels({
    user: Model.extend()
  });

  let user = schema.user.create({ name: 'Name' });

  assert.equal(Ember.get(user, 'name'), 'Name');
});

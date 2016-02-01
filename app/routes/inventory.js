import Ember from 'ember';

export default Ember.Route.extend({
  fieldbook: Ember.inject.service('fieldbook'),
  model() {
    return this.get('fieldbook').request('/inventory');
  }
});

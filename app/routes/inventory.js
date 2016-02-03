import Ember from 'ember';

export default Ember.Route.extend({
  fieldbook: Ember.inject.service('fieldbook'),
  model() {
    const endpoint = '/inventory';
    const include = [
      'productid',
      'quantity',
      'restock_at'
    ].join(',');
    const limit = 10;
    const query = `${endpoint}?include=${include}&limit=${limit}`

    return this.get('fieldbook').request(query);
  }
});

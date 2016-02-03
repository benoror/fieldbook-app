import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  /*
  Override with Fieldbook API specific stuff
   */
  host: 'https://api.fieldbook.com',
  namespace: 'v1/56ad5a1a0dc76e03001d7ac3',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Basic ' + btoa('key-1:uJlqffeCO-oBX7bbHuzG')
  },
  /*
  Override query method to inject `include` params
  with default values from DS.Model attributes
   */
  query(store, type, query) {
    let attrs = [];
    type.eachAttribute((name) => attrs.push(name));
    // Override unless specified
    query.include = query.include || attrs.join(',');
    return this._super(...arguments);
  }
});

import DS from 'ember-data';

export default DS.Model.extend({
  productid: DS.attr('string'),
  quantity: DS.attr('number'),
  restock_at: DS.attr('number'),
});

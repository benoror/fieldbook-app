import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  /*
  Normalize JSON response
  to match JSON API guidelines
  Info: http://jsonapi.org/
   */
  normalizeResponse(store, type, payload) {
    let new_payload = {data: []};
    // Handle both types of Fieldbook responses
    (payload.items || payload).forEach((record) => {
      const id = record.id;
      delete record.id;
      new_payload.data.push({
        id,
        type: type.modelName,
        attributes: record
      });
    });
    return new_payload;
  }
});

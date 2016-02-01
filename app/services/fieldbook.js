import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
  host: 'https://api.fieldbook.com/v1/56ad5a1a0dc76e03001d7ac3',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Basic ' + btoa('key-1:uJlqffeCO-oBX7bbHuzG')
  }
});

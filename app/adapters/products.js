// We extend our existing App-wide adapter
import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  pathForType: () => 'products'
});

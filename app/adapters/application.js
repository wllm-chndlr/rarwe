import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  authorize(xhr) {
    let { token } = this.get('session.data.authenticated');
    if (token) {
      xhr.setRequestHeader('Authorization', `Bearer ${token}`);
    }
  }
});

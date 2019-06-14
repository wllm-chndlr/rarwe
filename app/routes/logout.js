import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({ session: service(),
  beforeModel() {
    this.session.invalidate();
    this.transitionTo('login');
  } 
});
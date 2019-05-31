import Route from '@ember/routing/route';
import { capitalize as capitalizeWords } from 'rarwe/helpers/capitalize';

export default Route.extend({
  resetController(controller) {
    controller.setProperties({
      isAddingSong: false,
      newSongTitle: ''
    })
  },
  actions: {
    didTransition() {
      let band = this.modelFor(this.routeName);
      let name = capitalizeWords(band.name);
      document.title = `${name} songs - Rock & Roll`;
    },
  }
});

import Controller from '@ember/controller';

export default Controller.extend({
    isAddingBand: false,
    newBandName: '',

    actions: {
        addBand() {
            this.set('isAddingBand', true);
        },

        cancelAddBand() {
            this.set('isAddingBand', false);
        },

        saveBand() {
            // Create a new band
        }
    }
});

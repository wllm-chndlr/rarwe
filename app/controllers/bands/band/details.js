import Controller from '@ember/controller';

export default Controller.extend({
    isEditing: false,

    actions: {
        toggleEditing() {
            this.toggleProperty('isEditing');
        }
    }
});

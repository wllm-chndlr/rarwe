import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    async signIn(event) {
      event.preventDefault();
      let { email, password } = this;
      //TODO: authenticate the user against the back-end 
      await this.transitionToRoute('bands');
    }
  }
});

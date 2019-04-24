import EmberObject, { computed } from "@ember/object";
import { dasherize } from "@ember/string";

export default EmberObject.extend({
  name: "",
  
  slug: computed("name", function() {
    return dasherize(this.name);
  })
});

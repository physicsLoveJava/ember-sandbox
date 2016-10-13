import Ember from 'ember';
import set from 'ember-metal/set';
export default Ember.Component.extend({
  classNames: ['cell', '-4of12'],

  actions: {
    select(user) {
      set(this, 'selectedUser', user);
    },

    clear() {
      set(this, 'selectedUser', null);
    }
  }
});

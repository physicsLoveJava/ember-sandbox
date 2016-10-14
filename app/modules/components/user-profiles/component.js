import Ember from 'ember';
import set from 'ember-metal/set';

export default Ember.Component.extend({
  classNames: ['card'],
  tagName: ['section'],

  actions: {
    selectUser(user) {
      set(this, 'selectedUser', user);
    },

    clearUser() {
      set(this, 'selectedUser', null);
    }
  }
}).reopenClass({
  positionalParams: ['users']
});

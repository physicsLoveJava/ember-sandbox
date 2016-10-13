import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['card'],
  actions: {
    select(user) {
      console.log('select user');
    },
    selectUser(user) {
      console.log('profile', user);
    }
  }
});

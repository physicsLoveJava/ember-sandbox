import Controller from 'ember-controller';
import get from 'ember-metal/get';
import set from 'ember-metal/set';

export default Controller.extend({

  actions: {
    select(user) {
      console.log('index select', user);
    },
    selectUser(user) {
      console.log('index selectUser', user);
    },
    clearUser(user) {
      console.log('index clearUser', user);
    }
  }

});

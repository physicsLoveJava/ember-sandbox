import Ember from 'ember';
import set from 'ember-metal/set';
import styles from '../../../index/styles';

export default Ember.Component.extend({
  classNames: ['cell', '-4of12'],
  tagName: ['ul'],
  localClassNames: ['user-list'],
  styles,

  actions: {
    select(user) {
      set(this, 'selectedUser', user);
    },

    clear() {
      set(this, 'selectedUser', null);
    }
  }
}).reopenClass({
  positionalParams: ['api']
});

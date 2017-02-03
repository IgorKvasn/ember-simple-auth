import Ember from 'ember';

const { inject: { service }, Component } = Ember;

export default Component.extend({
  session:        service('session'),
  sessionAccount: service('session-account'),

  actions: {
    login() {
      // eslint-disable-next-line ember/closure-actions
      this.sendAction('onLogin');
    },

    logout() {
      this.get('session').invalidate();
    }
  }
});

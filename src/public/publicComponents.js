import Vue from 'vue';

const Dialog = r => require.ensure([], () => r(require('../../lib/plugins/Dialog.vue')), 'Dialog');
// const Toast = r => require.ensure([], () => r(require('./Toast.vue')), 'Toast');

Vue.component('Dialog', Dialog);
// Vue.component('Toast', Toast);

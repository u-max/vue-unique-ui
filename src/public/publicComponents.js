import Vue from 'vue';

const Toast = r => require.ensure([], () => r(require('./Toast.vue')), 'Toast');

Vue.component('Toast', Toast);

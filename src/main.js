// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import animate from 'animate.css'
// require('@/assets/js/style.js'); // 公用样式
import uniqueUI from '../lib/unique-ui.js';
Vue.use(uniqueUI)
// require('@/public/publicComponents.js'); // vue公共组件

Vue.use(animate)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

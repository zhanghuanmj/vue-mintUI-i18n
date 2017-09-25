// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import FastClick from 'fastclick'
import './plugs/flexible_css.debug'
import './plugs/flexible.debug'
import './plugs/layer_mobile/need/layer.css'
import './plugs/layer_mobile/layer'



FastClick.attach(document.body);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});


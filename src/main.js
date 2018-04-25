// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import FastClick from 'fastclick';
import * as Cookies from 'tiny-cookie';
import './plugs/flexible_css.debug';
import './plugs/flexible.debug';
import './plugs/layer_mobile/need/layer.css';
import './plugs/layer_mobile/layer';
import App from './App.vue';
import router from './router';
import i18n from './i18n/i18n';
import axios from './ajax';


Vue.use(MintUI);

FastClick.attach(document.body);
Vue.config.productionTip = false;
window.Cookies = Cookies;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: { App }
});


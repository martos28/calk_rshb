import 'babel-polyfill';
import Vue from 'vue';
import LoadScript from 'vue-plugin-load-script';
import App from './App.vue';
import './assets/style/etc.scss';
import './assets/style/wadapt.scss';
import 'element-closest-polyfill';
import 'custom-event-polyfill';

Vue.config.productionTip = true;
Vue.use(LoadScript);

new Vue({
  render: (h) => h(App),
}).$mount('#app');

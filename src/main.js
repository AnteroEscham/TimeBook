import Vue from 'vue';
import store from './components/store/';
import App from './App.vue';

// scss
import '../scss/index.scss';

//icons
import 'boxicons';

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App)
}).$mount('#app');
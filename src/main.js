import Vue from "vue";
import App from "./App.vue";
import Veevalidate from "vee-validate";
import router from "./router";
import store from './store'
import './assets/style.css';

Vue.use(Veevalidate);
Vue.config.productionTip = false;
// Vue.directive('markdown', markdown)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

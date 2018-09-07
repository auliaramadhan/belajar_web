import Vue from "vue";
import App from "./App.vue";
import Veevalidate from "vee-validate";
import router from "./router";
import './assets/style.css';
import markdown from '@/directives/markdown';

Vue.use(Veevalidate);
Vue.config.productionTip = false;
Vue.directive('markdown', markdown)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

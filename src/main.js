import Vue from "vue";
import App from "./App.vue";
import Veevalidate from "vee-validate";
import router from "./router";

Vue.use(Veevalidate);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

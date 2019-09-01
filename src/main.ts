import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import service from "@/utils/http";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.config.productionTip = false;
Vue.prototype.$https = service;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

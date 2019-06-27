// @ts-nocheck

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/reset.less";
import "@/assets/css/olive.less";
import "./assets/css/vant.less";
import "./libs/rem";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

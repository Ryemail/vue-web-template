import Vue from "vue";
import Router from "vue-router";
import Home from "./vant/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/datetimePicker",
      name: "datetimePicker",
      component: () =>
        import("./vant/DatetimePicker.vue")
    },
    {
        path:"/Collapse",
        name: "Collapse",
        component: () =>
          import("./vant/Collapse.vue")
    }
  ]
});

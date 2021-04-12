import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { Plugin } from "vue-fragment";
import { store } from "./store/index";
import Notifications from "vue-notification";

Vue.config.productionTip = false;
Vue.use(Plugin);
Vue.use(Notifications);
new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");

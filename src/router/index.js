import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/pages/client/homePage/views/HomePage";
import Regulations from "@/pages/client/regulationsPage/views/Regulations";
import Notifications from "@/pages/client/notificationsPage/views/Notifications";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "/kodukord",
    name: "Regulations",
    component: Regulations
  },
  {
    path: "/teadaanded",
    name: "Notifications",
    component: Notifications
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

/* eslint-disable prettier/prettier */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Nemo from "../views/Nemo.vue";
import Trade from "../views/Trade.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/nemo",
    name: "Nemo",
    component: Nemo,
  },
  {
    path: "/trade",
    name: "trade",
    "component": Trade
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;

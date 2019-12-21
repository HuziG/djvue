import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Land from "@/page/land";
import Index from "../../page/index";
import ErrorPage from "@/page/error-page/404.vue";

import Home from "../../views/home";
import Farmer from "../../views/farmer";
import Base from "../../views/base";
import Integral from "../../views/integral";
import Task from "../../views/task";
import Power from "../../views/power";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "homePage",
      component: Index,
      redirect: "/index/home"
    },
    { path: "/land", name: "landPage", component: Land },
    {
      path: "/index",
      name: "indexPage",
      component: Index,
      redirect: "/index/home",
      meta: {
        keepAlive: true
      },
      children: [
        {
          path: "home",
          name: "home",
          component: Home
        },
        {
          path: "base",
          name: "base",
          component: Base
        },
        {
          path: "farmer",
          name: "farmer",
          component: Farmer
        },
        {
          path: "task",
          name: "task",
          component: Task
        },
        {
          path: "integral",
          name: "integral",
          component: Integral
        },
        {
          path: "power",
          name: "power",
          component: Power,
          meta: {
            keepAlive: true
          }
        }
      ]
    },
    {
      path: "/404",
      name: "404Page",
      component: ErrorPage
    },
    {
      path: "*",
      redirect: "/404"
    }
  ]
});

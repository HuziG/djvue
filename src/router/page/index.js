import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Land from "@/page/land";
import Index from "../../page/index";
import ErrorPage from "@/page/error-page/404.vue";

import Product from "../../views/product";
import Operation from "../../views/operation";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Index,
      redirect: "/index/product"
    },
    { path: "/land", name: "landPage", component: Land },
    {
      path: "/index",
      redirect: "/index/product",
      component: Index,
      children: [
        {
          path: "product",
          component: Product
        },
        {
          path: "operation",
          component: Operation
        }
      ]
    },
    {
      path: "/404",
      component: ErrorPage
    },
    {
      path: "*",
      redirect: "/404"
    }
  ]
});

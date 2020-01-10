/*
 * @Descripttion: 页面路由
 * @version:
 * @Author: dingjia z
 * @Date: 2020-01-06 13:06:55
 * @LastEditors  : dingjia z
 * @LastEditTime : 2020-01-10 17:17:06
 */
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Land from "@/page/land";
import Index from "@/page/index";
import ErrorPage from "@/page/error-page/404.vue";

import Product from "@/views/product";
import Operation from "@/views/operation";
import Power from "@/views/power";

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
      name: "indexPage",
      component: Index,
      children: [
        {
          path: "product",
          component: Product
        },
        {
          path: "operation",
          component: Operation
        },
        {
          path: "Power",
          component: Power
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

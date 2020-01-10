/*
 * @Descripttion: 汇总 store
 * @version:
 * @Author: dingjia z
 * @Date: 2020-01-06 13:06:55
 * @LastEditors  : dingjia z
 * @LastEditTime : 2020-01-10 15:55:24
 */
import Vue from "vue";
import Vuex from "vuex";
import user from "./module/user";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    user
  },
  strict: debug
});

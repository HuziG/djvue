/*
 * @Descripttion: 汇总 store
 * @version:
 * @Author: dingjia z
 * @Date: 2020-01-06 13:06:55
 * @LastEditors  : dingjia z
 * @LastEditTime : 2020-01-10 21:37:20
 */
import Vue from "vue";
import Vuex from "vuex";
import createVuexAlong from "vuex-along";

Vue.use(Vuex);

import user from "./module/user";

export default new Vuex.Store({
  modules: {
    user
  },
  plugins: [createVuexAlong()]
});

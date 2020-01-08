/**
 * 全站http配置
 *
 * axios参数说明
 * isSerialize是否开启form表单提交
 * isToken是否需要token
 */
import axios from "axios";
import store from "../store";
import router from "@/router/router";
import { getToken } from "@/util/auth";
import { Message } from "element-ui";

axios.defaults.timeout = 10000;
//返回其他状态吗
axios.defaults.validateStatus = function(status) {
  return status >= 200 && status <= 500; // 默认的
};
//跨域请求，允许保存cookie
axios.defaults.withCredentials = true;

//HTTPrequest拦截
axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
//HTTPresponse拦截
axios.interceptors.response.use(
  res => {
    const status = res.data.code || 200;
    const message = res.data.msg || "未知错误";
    // token 失效
    // if (status === 401) {
    //   store.dispatch("FedLogOut").then(() => router.push({ path: "/login" }));
    // }
    if (status !== 200) {
      Message({
        message: message,
        type: "error"
      });
      return Promise.reject(new Error(message));
    }
    //如果在白名单里则自行catch逻辑处理
    //如果是401则跳转到登录页面
    // 如果请求为非200否者默认统一处理
    return res;
  },
  error => {
    return Promise.reject(new Error(error));
  }
);

export default axios;

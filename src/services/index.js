/*
 * @Descripttion: 全站http配置
 * @version:
 * @Author: dingjia z
 * @Date: 2020-01-06 13:06:55
 * @LastEditors  : dingjia z
 * @LastEditTime : 2020-01-10 18:21:59
 */
import axios from "axios";
import { Message } from "element-ui";
import { serialize } from "../util/utils";

axios.defaults.timeout = 10000;

//HTTPrequest拦截
axios.interceptors.request.use(
  config => {
    console.log("请求拦截");
    console.log(config);

    config.headers["Content-Type"] = "application/x-www-form-urlencoded";

    if (config.method === "post") {
      config.data = serialize(config.data);
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
//HTTPresponse拦截
axios.interceptors.response.use(
  res => {
    console.log("响应拦截");
    console.log(res);

    const code = res.data.code || 1;
    const message = res.data.msg || "未知错误";

    // token 失效
    if (code === -10) {
      // store.dispatch("FedLogOut").then(() => router.push({ path: "/login" }));
      console.log("token 失效");
    }

    if (code !== 1) {
      Message({
        message: message,
        type: "error"
      });
      return Promise.reject(new Error(message));
    }

    return res;
  },
  error => {
    return Promise.reject(new Error(error));
  }
);

export default axios;

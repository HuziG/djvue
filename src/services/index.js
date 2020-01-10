/*
 * @Descripttion: 全站http配置
 * @version:
 * @Author: dingjia z
 * @Date: 2020-01-06 13:06:55
 * @LastEditors  : dingjia z
 * @LastEditTime : 2020-01-10 20:46:02
 */
import axios from "axios";
import router from "../router";
import { Message } from "element-ui";
import { serialize } from "../util/utils";

axios.defaults.timeout = 10000;

//HTTPrequest拦截
axios.interceptors.request.use(
  config => {
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
    const code = res.data.code || 1;
    const message = res.data.msg || "未知错误";

    // token 失效
    if (code === -10) {
      // store.dispatch("FedLogOut").then(() => router.push({ path: "/login" }));
      console.log("token 失效");
      router.push("/land");
    }

    if (code !== 1) {
      Message({
        message: message,
        type: "error"
      });
      return Promise.reject(new Error(message));
    }

    return res.data;
  },
  error => {
    return Promise.reject(new Error(error));
  }
);

export default axios;

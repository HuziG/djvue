/*
 * @Descripttion:
 * @version:
 * @Author: dingjia z
 * @Date: 2020-01-06 13:06:55
 * @LastEditors  : dingjia z
 * @LastEditTime : 2020-01-10 20:50:47
 */

import router from "./router";
import { getToken } from "./util/auth";

const hasToken = getToken();

router.beforeEach((to, from, next) => {
  if (to.path === "/") {
    next({ path: "/index" });
  }

  if (to.path.indexOf("/index") != -1) {
    if (!hasToken) {
      next({ path: "/land" });
    }
  }

  next();
});

// router.onError(() => {
//   console.log("error");
// });

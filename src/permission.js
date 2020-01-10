/*
 * @Descripttion:
 * @version:
 * @Author: dingjia z
 * @Date: 2020-01-06 13:06:55
 * @LastEditors  : dingjia z
 * @LastEditTime : 2020-01-10 17:31:22
 */

import router from "./router";

const hasToken = false;

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

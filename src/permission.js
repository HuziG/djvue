import router from "./router/page";

// mock token value
const hasToken = true;

router.beforeEach((to, from, next) => {
  if (to.path === "/") {
    next({ path: "/index" });
  }

  if (to.path === "/index" && !hasToken) {
    next({ path: "/land" });
  }

  next();
});

router.onError(() => {
  console.log("error");
});

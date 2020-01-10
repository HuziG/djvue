import router from "@/router";
import { removeToken } from "@/util/auth";

const user = {
  state: {
    username: "",
    isLogining: false
  },

  mutations: {
    SetUserName(state, val) {
      state.username = val;
      state.isLogining = true;
    },

    ExitUser() {
      removeToken();
      router.push("/land");
    }
  },

  getters: {
    getUserName(state) {
      return state.username;
    }
  }
};

export default user;

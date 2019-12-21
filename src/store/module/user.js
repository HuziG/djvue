const state = {
  username: ""
};

const getters = {};

const actions = {
  setUsername({ commit }, product) {
    commit("setUsername", { username: product });
  }
};

const mutations = {
  setUsername(state, payload) {
    state.username = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

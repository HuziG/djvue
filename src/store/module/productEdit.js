import { setSession, getSession } from "../../util/store";

const productEdit = {
  state: {
    productName: getSession("product_info").productName || "",
    productShortDes: getSession("product_info").productShortDes || "",
    productDes: getSession("product_info").productDes || "",
    productLang: getSession("product_info").productLang || "",
    productMiniPic: getSession("product_info").productMiniPic || [],
    productListPic: getSession("product_info").productListPic || [],
    prodcutVideos: getSession("product_info").prodcutVideos || "",
    productVoice: getSession("product_info").productVoice || [],
    productAttr: getSession("product_info").productAttr || []
  },

  actions: {
    // 产品编辑信息更新 action
    ChangeProductValue({ commit }, key, value) {
      commit("SET_PRODUCT_VALUE", key, value);
    },
    // 关联产品 action
    ConnectProduct({ dispatch }) {
      dispatch("ConnectNeedInfo");
    },
    async ConnectNeedInfo({ commit }) {}
  },

  mutations: {
    SET_PRODUCT_VALUE: (state, key, value) => {
      state[key] = value;
      setSession("product_info", state);
    }
  }
};

export default productEdit;

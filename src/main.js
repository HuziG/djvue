import Vue from "vue";
import App from "./App.vue";

// scss
import "./styles/common.scss";

// vuex
import "es6-promise/auto";
import Vuex from "vuex";
Vue.use(Vuex);

// element ui
import "./styles/element-variables.scss";
import {
  Form,
  FormItem,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Container,
  Header,
  Aside,
  Main,
  Dropdown,
  Breadcrumb,
  BreadcrumbItem,
  Footer,
  RadioGroup,
  RadioButton,
  Icon
} from "element-ui";
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Button);
Vue.use(Checkbox);
Vue.use(Row);
Vue.use(Col);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(MenuItem);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Dropdown);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Footer);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Icon);

// axios
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

// vuerouter
import router from "./router/page";

// permission
import "./permission";

// global function
import { Loading, Message } from "element-ui";
Vue.prototype.$loading = Loading;
Vue.prototype.$message = Message;

// store
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

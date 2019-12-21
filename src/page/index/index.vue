<template>
  <div>
    <el-container class="main">
      <el-aside
        class="el-aside"
        :width="tabWidth + 'px'"
        style="overflow:hidden;"
      >
        <Slider :isCollapse="isCollapse" />
      </el-aside>
      <el-container>
        <el-header class="main-header">
          <Header :isCollapse="isCollapse" :isClossTabFun="isClossTabFun" />
        </el-header>
        <el-main>
          <Main />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "./components/header";
import Main from "./components/main";
import Slider from "./components/slider";

export default {
  components: {
    Header,
    Main,
    Slider
  },
  data() {
    return {
      isCollapse: false,
      tabWidth: 200,
      refreshTime: "",
      refreshLock: false
    };
  },
  created() {
    this.refreshToken();
  },
  methods: {
    // 10分钟检测 一次 token是否过期
    // refreshToken() {
    //   this.refreshTime = setInterval(() => {
    //     console.log("console");
    //   }, 600000);
    // },

    // slider 缩与弹出
    isClossTabFun() {
      this.isCollapse = !this.isCollapse;
      if (this.isCollapse) {
        this.tabWidth = 64;
      } else {
        this.tabWidth = 200;
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "./style/index.scss";
</style>

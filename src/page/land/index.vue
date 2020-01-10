<!--
 * @Descripttion: 
 * @version: 
 * @Author: dingjia z
 * @Date: 2020-01-06 13:06:55
 * @LastEditors  : dingjia z
 * @LastEditTime : 2020-01-10 16:02:35
 -->
<template>
  <div class="login-container">
    <div class="login-weaper animated bounceInDown">
      <div class="login-left">
        <img class="img" src="@/assets/logo.png" alt />
        <p class="title">菲尔斯后台管理</p>
      </div>
      <div class="login-border">
        <div class="login-main">
          <h4 class="login-title">用户登陆</h4>
          <Form />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "./components/form";

export default {
  components: {
    Form
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "./style/index.scss";
</style>

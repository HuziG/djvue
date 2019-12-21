<template>
  <div class="login-container">
    <div class="login-weaper animated bounceInDown">
      <div class="login-left">
        <!-- <img class="img" src="/img/logo.png" alt /> -->
        <p class="title">溯源系统</p>
      </div>
      <div class="login-border">
        <div class="login-main">
          <h4 class="login-title">
            用户登陆
          </h4>
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

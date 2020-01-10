<template>
  <div id="container">
    <el-form
      class="login-form"
      status-icon
      :rules="loginRules"
      ref="loginForm"
      :model="loginForm"
      label-width="0"
    >
      <el-form-item prop="username">
        <el-input
          size="small"
          v-model="loginForm.username"
          auto-complete="off"
          placeholder="请输入用户名"
        >
          <i slot="prefix" class="icon-yonghu"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          size="small"
          :type="passwordType"
          v-model="loginForm.password"
          auto-complete="off"
          placeholder="请输入密码"
        >
          <i
            class="el-icon-view el-input__icon"
            slot="suffix"
            @click="showPassword"
          ></i>
          <i slot="prefix" class="icon-mima"></i>
        </el-input>
      </el-form-item>
      <div style="text-align: right;padding-bottom: 15px;">
        <el-checkbox v-model="loginForm.rememberPass">记住密码</el-checkbox>
      </div>
      <el-form-item style="text-align: center;">
        <el-button
          type="primary"
          size="small"
          @click="handleLogin"
          class="login-submit"
          >立即登陆</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import router from "@/router";

import { UserLand } from "@/api/user";

export default {
  name: "userlogin",
  data() {
    return {
      loginForm: {
        // cookie get rem user land info
        username: Cookies.get("rem_name") || "",
        password: Cookies.get("rem_pass") || "",
        rememberPass: false
      },
      loginRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 1, message: "密码长度最少为6位", trigger: "blur" }
        ]
      },
      passwordType: "password",
      fullscreenLoading: false
    };
  },
  methods: {
    showPassword() {
      this.passwordType == ""
        ? (this.passwordType = "password")
        : (this.passwordType = "");
    },
    handleLogin() {
      UserLand(this.loginForm.username, this.loginForm.password).then(res => {
        router.push({ path: "/index" });
        console.log(res);
      });
      /**
       * 登陆
       * 显示loading
       * 成功
       *  隐藏loading
       *  获取loginForm 派发store 存储用户名 及 记住密码
       *  立即获取token 派发store 存储token
       *  设置全局token检测 定时获取方法(10分钟 / 次)
       *  跳转至index page
       * 失败
       *  隐藏loading
       *  获取回调数据
       *  显示失败原因
       */
      // this.$loading.service({
      //   fullscreen: true,
      //   text: "登陆中，请稍后...",
      //   lock: true
      // });
      // this.$refs.loginForm.validate(valid => {
      //   if (valid) {
      //     const loading = this.$loading({
      //       lock: true,
      //       text: "登录中,请稍后。。。",
      //       spinner: "el-icon-loading"
      //     });
      //     this.$store
      //       .dispatch("LoginByUsername", this.loginForm)
      //       .then(() => {
      //         this.$router.push({ path: this.tagWel.value });
      //         loading.close();
      //       })
      //       .catch(() => {
      //         loading.close();
      //       });
      //   }
      // });
    }
  }
};
</script>

<style lang="scss" scoped></style>

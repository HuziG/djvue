<!--
 * @Descripttion: 
 * @version: 
 * @Author: dingjia z
 * @Date: 2020-01-06 13:06:55
 * @LastEditors  : dingjia z
 * @LastEditTime : 2020-01-10 20:31:01
 -->
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
      const { username, password } = this.loginForm;

      UserLand(username, password).then(res => {
        Cookies.set("rem_name", username);
        Cookies.set("rem_pass", password);
        Cookies.set("token", res.token);
        this.$store.commit("SetUserName", username);
        this.$router.push("/index");
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>

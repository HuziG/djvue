<!--
 * @Descripttion: 
 * @version: 
 * @Author: dingjia z
 * @Date: 2020-01-06 13:06:55
 * @LastEditors  : dingjia z
 * @LastEditTime : 2020-01-10 17:16:31
 -->
<template>
  <div id="slider-block">
    <router-link to="/index/home">
      <div class="logo-block">
        <img src="@/assets/logo.png" alt="error" />
      </div>
    </router-link>
    <div>
      <el-menu
        class="menu"
        :collapse="isCollapse"
        :text-color="textColor"
        :active-text-color="activeTextColor"
      >
        <router-link to="/index/product">
          <el-menu-item index="1">
            <i class="el-icon-shopping-bag-2"></i>
            <span slot="title">产品管理</span>
          </el-menu-item>
        </router-link>
      </el-menu>
      <el-menu
        class="menu"
        :collapse="isCollapse"
        :text-color="textColor"
        :active-text-color="activeTextColor"
      >
        <router-link to="/index/operation">
          <el-menu-item index="2">
            <i class="el-icon-thumb"></i>
            <span slot="title">产品操作</span>
          </el-menu-item>
        </router-link>
      </el-menu>
      <el-menu
        class="menu"
        :collapse="isCollapse"
        :text-color="textColor"
        :active-text-color="activeTextColor"
      >
        <router-link to="/index/power">
          <el-menu-item index="3">
            <i class="el-icon-user"></i>
            <span slot="title">权限管理</span>
          </el-menu-item>
        </router-link>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isCollapse: Boolean
  },
  data() {
    return {
      textColor: "#8F9399",
      activeTextColor: "#333"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/index.scss";
</style>

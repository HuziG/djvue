<template>
  <div>
    <router-link to="/index/home">
      <div class="logo-block">LOGO</div>
    </router-link>
    <div>
      <el-menu
        class="menu"
        :collapse="isCollapse"
        background-color="#202229"
        text-color="#BCBDBF"
        active-text-color="#fff"
      >
        <router-link to="/index/base">
          <el-menu-item index="1">
            <i class="el-icon-location"></i>
            <span slot="title">基地管理</span>
          </el-menu-item>
        </router-link>
        <router-link to="/index/farmer">
          <el-menu-item index="2">
            <i class="el-icon-user-solid"></i>
            <span slot="title">农户管理</span>
          </el-menu-item>
        </router-link>
        <router-link to="/index/task">
          <el-menu-item index="3">
            <i class="el-icon-s-check"></i>
            <span slot="title">任务检查</span>
          </el-menu-item>
        </router-link>
        <router-link to="/index/integral">
          <el-menu-item index="4">
            <i class="el-icon-tickets"></i>
            <span slot="title">积分管理</span>
          </el-menu-item>
        </router-link>
        <router-link to="/index/power">
          <el-menu-item index="5">
            <i class="el-icon-s-custom"></i>
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
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/index.scss";
</style>

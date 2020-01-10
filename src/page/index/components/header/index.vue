<!--
 * @Descripttion: 
 * @version: 
 * @Author: dingjia z
 * @Date: 2020-01-06 13:06:55
 * @LastEditors  : dingjia z
 * @LastEditTime : 2020-01-10 21:37:41
 -->
<template>
  <div class="header-block">
    <div class="isClossTab" @click="isClossTabFun">
      <i
        class="clossTabIcon"
        :class="isCollapse ? ' el-icon-s-unfold' : ' el-icon-s-fold'"
      ></i>
    </div>

    <div class="user-tools">
      <span class="name"
        >Hi 管理员 <span>{{ username }}</span
        >!</span
      >
      <el-button type="text" @click="handleExit">退出登陆</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isCollapse: Boolean,
    isClossTabFun: Function
  },
  data() {
    return {
      username: this.$store.getters.getUserName
    };
  },
  methods: {
    handleExit() {
      this.$store.commit("ExitUser");
    }
  }
};
</script>

<style lang="scss" scoped>
$header-height: 60px;

.header-block {
  position: relative;
  line-height: $header-height + 5;
}

.isClossTab {
  display: inline-block;
}

.clossTabIcon {
  color: #333;
  font-size: 26px;
  cursor: pointer;
}

.user-tools {
  color: #333;
  float: right;
  margin-right: 20px;

  .name {
    margin-right: 30px;
  }
}
</style>

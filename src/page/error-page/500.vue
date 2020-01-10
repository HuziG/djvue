<!--
 * @Descripttion: 
 * @version: 
 * @Author: dingjia z
 * @Date: 2020-01-06 13:06:55
 * @LastEditors: dingjia z
 * @LastEditTime: 2020-01-10 16:00:05
 -->
<template>
  <div class="error-page">
    <div class="img">
      <img src="@/assets/logo.png" alt="error" />
    </div>
    <div class="content">
      <h1>500</h1>
      <div class="desc">抱歉，服务器出错了</div>
      <div class="actions">
        <router-link :to="{path:'/'}">
          <el-button type="primary">返回首页</el-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "error-500"
};
</script>
<style lang="scss" scoped>
@import "./style.scss";
</style>

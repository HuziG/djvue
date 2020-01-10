<!--
 * @Descripttion: 
 * @version: 
 * @Author: dingjia z
 * @Date: 2019-12-22 12:02:41
 * @LastEditors: dingjia z
 * @LastEditTime: 2020-01-10 17:25:06
 -->
<template>
  <div id="main">
    <el-button
      class="plus-icon"
      icon="el-icon-plus"
      type="primary"
      size="small"
      @click="handleDialogForm"
    >添加管理员</el-button>
    <el-button icon="el-icon-refresh" type="primary" size="small">刷新</el-button>
  </div>
</template>

<script>
export default {
  props: {
    handleDialogForm: Function
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
#main {
  padding: 10px 0;
  text-align: right;
}
.plus-icon {
  margin-right: 10px;
}
</style>

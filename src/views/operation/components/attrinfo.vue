<template>
  <div>
    <div class="h2">产品属性信息添加</div>
    <div class="main">
      <AttrTable />
    </div>
    <div class="but-nav">
      <el-button type="primary" class="prev" @click="handleStep(1)">上一步</el-button>
      <el-button type="primary" class="next" @click="handleStep(3)">下一步</el-button>
    </div>
  </div>
</template>

<script>
import AttrTable from "./attrtable";

export default {
  components: {
    AttrTable
  },
  props: {
    handleStep: Function
  }
};
</script>

<style lang="scss" scoped>
@import url("../index.scss");
</style>
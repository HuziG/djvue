<template>
  <div id="main">
    <el-pagination
      layout="prev, pager, next"
      :total="50"
      @current-change="currentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    currentChange: Function
  }
};
</script>

<style lang="scss" scoped>
#main {
  text-align: center;
  padding-top: 10px;
}
</style>

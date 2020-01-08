<template>
  <div>
    <div class="h2">产品最后的设置</div>
    <div class="main">
      <p class="title">是否需要关联产品?</p>
      <p class="vice-des">发布所关联产品的其他语言版本</p>
      <div class="but-group">
        <el-button>不需要</el-button>
        <el-button>是</el-button>
      </div>
    </div>
    <div class="but-nav">
      <el-button type="primary" class="prev" @click="handleStep(1)">上一步</el-button>
      <el-button type="primary" class="next" @click="handleStep(3)">下一步</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    handleStep: Function
  }
};
</script>

<style lang="scss" scoped>
@import url("../index.scss");

.main {
  text-align: center;

  .title {
    font-size: 22px;
    font-weight: 700;
  }

  .vice-des {
    color: #666;
    font-size: 14px;
  }
}
</style>
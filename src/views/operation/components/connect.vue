<template>
  <div>
    <div class="h2">产品关联设置</div>
    <div class="main">
      <div class="main-block">
        <div class="step1">
          <p class="title">是否需要关联产品</p>
          <p class="vice-des">选择关联产品,发布该产品的其他语言版本</p>
          <div class="but-group">
            <el-button>不需要</el-button>
            <el-button>需要</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="but-nav">
      <el-button type="primary" class="next" @click="handleStep(1)">下一步</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    handleStep: Function
  },
  data() {
    return {
      step: 1
    };
  }
};
</script>

<style lang="scss" scoped>
@import url("../index.scss");

.main {
  position: relative;
  text-align: center;

  .main-block {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

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
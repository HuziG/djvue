<!--
 * @Descripttion: 产品操作 步骤5
 * @version: 
 * @Author: dingjia z
 * @Date: 2020-01-08 17:55:34
 * @LastEditors  : dingjia z
 * @LastEditTime : 2020-01-10 15:37:12
 -->
<template>
  <div>
    <div class="h2">产品最后的设置</div>
    <div class="main">
      <div class="main-block">
        <p class="title">已抵达最后一步</p>
        <p class="vice-des">点击按钮立即发布产品吧</p>
        <div class="but-group">
          <el-button>立即发布产品</el-button>
        </div>
      </div>
    </div>
    <div class="but-nav">
      <el-button type="primary" class="prev" @click="handleStep(3)">上一步</el-button>
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
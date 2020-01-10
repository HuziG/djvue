<!--
 * @Descripttion: 产品操作 步骤1
 * @version: 
 * @Author: dingjia z
 * @Date: 2020-01-08 20:55:49
 * @LastEditors  : dingjia z
 * @LastEditTime : 2020-01-10 15:35:52
 -->
<template>
  <div>
    <div class="h2">产品关联设置</div>
    <div class="main">
      <div class="step1" v-if="step >= 1">
        <p class="title">是否需要关联产品</p>
        <p class="vice-des">选择关联产品,发布该产品的其他语言版本</p>
        <div class="but-group">
          <el-button @click="handleStep(1)">不需要</el-button>
          <el-button @click="handleStepTwo">需要</el-button>
        </div>
      </div>
      <div class="step2" v-if="step >= 2">
        <p class="title">选择一款需要关联产品吧!</p>
        <ConnectTable class="table" :handleStep="handleStep" />
      </div>
    </div>
  </div>
</template>

<script>
import ConnectTable from "./connecttable";

export default {
  components: {
    ConnectTable
  },
  props: {
    handleStep: Function
  },
  data() {
    return {
      step: 1
    };
  },
  methods: {
    handleStepTwo() {
      this.step = 2;
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  text-align: center;

  .step1 {
    margin: 0 auto;

    .title {
      font-size: 22px;
      font-weight: 700;
    }

    .vice-des {
      color: #666;
      font-size: 14px;
    }
  }

  .step2 {
    width: 70%;
    margin: 25px auto;
    border-top: 1px solid #ccc;

    .title {
      font-size: 18px;
      font-weight: 700;
    }

    .table {
      margin: 0 auto;
    }
  }
}
</style>
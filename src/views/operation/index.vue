<template>
  <div>
    <div class="h1">产品操作</div>
    <br />
    <el-steps :active="step">
      <el-step title="步骤 1" description="产品基础信息添加"></el-step>
      <el-step title="步骤 2" description="产品关联设置"></el-step>
      <el-step title="步骤 3" description="产品媒体信息添加"></el-step>
      <el-step title="步骤 4" description="产品属性信息添加"></el-step>
      <el-step title="步骤 5" description="产品最后设置"></el-step>
    </el-steps>
    <br />
    <Connact v-if="step === 0" :handleStep="handleStep" />
    <BaseInfo v-show="step === 1" :handleStep="handleStep" />
    <MediaInfo v-show="step === 2" :handleStep="handleStep" />
    <AttrInfo v-show="step === 3" :handleStep="handleStep" />
    <Setting v-show="step === 4" :handleStep="handleStep" />
  </div>
</template>

<script>
import BaseInfo from "./components/baseinfo";
import MediaInfo from "./components/mediainfo";
import AttrInfo from "./components/attrinfo";
import Setting from "./components/setting";
import Connact from "./components/connect";

export default {
  components: {
    BaseInfo,
    MediaInfo,
    AttrInfo,
    Setting,
    Connact
  },
  data() {
    return {
      step: 0
    };
  },
  methods: {
    handleStep(val) {
      this.step = val;
    }
  },
  beforeDestroy() {
    sessionStorage.removeItem("step1_value");
  }
};
</script>

<style lang="scss" scoped>
</style>
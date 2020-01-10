<!--
 * @Descripttion: 产品操作 步骤2
 * @version: 
 * @Author: dingjia z
 * @Date: 2020-01-08 09:47:08
 * @LastEditors  : dingjia z
 * @LastEditTime : 2020-01-10 15:35:06
 -->
<template>
  <div>
    <div class="h2">基础信息编辑</div>
    <div class="main">
      <el-form :rules="rules" :model="form" ref="form" label-width="120px">
        <el-form-item label="产品名称" prop="name">
          <el-input v-model="form.name" placeholder="请输入产品名称" style="width: 500px;"></el-input>
        </el-form-item>
        <el-form-item label="产品简介" prop="short">
          <el-input
            v-model="form.short"
            :rows="3"
            type="textarea"
            placeholder="请输入产品简介"
            style="width: 500px;"
          ></el-input>
        </el-form-item>
        <el-form-item label="产品介绍" prop="long">
          <el-input
            v-model="form.long"
            :rows="8"
            type="textarea"
            placeholder="请输入产品介绍"
            style="width: 500px;"
          ></el-input>
        </el-form-item>
        <el-form-item label="语言版本">
          <el-radio-group v-model="form.lang">
            <el-radio label="zh">中文</el-radio>
            <el-radio label="en">英文</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>
    <div class="but-nav">
      <el-button type="primary" class="prev" @click="_handleStep(0)">上一步</el-button>
      <el-button type="primary" class="next" @click="_handleStep(2)">下一步</el-button>
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
      form: {
        name: "",
        short: "",
        long: "",
        lang: "zh"
      },
      rules: {
        name: [{ required: true, message: "请输入产品名称", trigger: "blur" }]
      }
    };
  },
  methods: {
    _handleStep(step) {
      this.handleStep(step);

      sessionStorage.setItem("step1_value", JSON.stringify(this.form));
    }
  },
  mounted() {
    const form = {
      name: "",
      short: "",
      long: "",
      lang: "zh"
    };
    this.form = JSON.parse(sessionStorage.getItem("step1_value")) || form;
  }
};
</script>

<style lang="scss" scoped>
@import url("../index.scss");
</style>
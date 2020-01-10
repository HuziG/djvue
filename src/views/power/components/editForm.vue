<!--
 * @Descripttion: 
 * @version: 
 * @Author: dingjia z
 * @Date: 2019-12-22 15:21:59
 * @LastEditors  : dingjia z
 * @LastEditTime : 2020-01-10 17:30:01
 -->
<template>
  <el-dialog
    title="编辑基地信息"
    width="30%"
    :visible.sync="dialogFormVisible"
    :before-close="handleDialogForm"
  >
    <el-form :model="form" :rules="rules" ref="ruleForm" label-width="120px">
      <el-form-item label="管理员名称" prop="name">
        <el-input class="inline-input" placeholder="请输入管理员名称" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="管理员密码" prop="pass">
        <el-input class="inline-input" placeholder="请输入负责人名称" v-model="form.pass"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('ruleForm')">立即修改</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  props: {
    dialogFormVisible: Boolean,
    handleDialogForm: Function,
    form: Object
  },
  data() {
    return {
      rules: {
        name: {
          required: true,
          message: "请输入管理员名称",
          trigger: "blur"
        },
        pass: {
          required: true,
          message: "请输入管理员密码",
          trigger: "blur"
        }
      }
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.el-autocomplete {
  width: 90%;
}
.el-input {
  width: 90%;
}
</style>

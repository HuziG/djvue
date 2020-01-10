<!--
 * @Descripttion: 添加管理员表单组件
 * @version: 
 * @Author: dingjia z
 * @Date: 2019-12-22 13:04:43
 * @LastEditors  : dingjia z
 * @LastEditTime : 2020-01-10 17:25:19
 -->
<template>
  <el-dialog
    title="添加基地"
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
        <el-button type="primary" @click="onSubmit('ruleForm')">立即添加</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  props: {
    dialogFormVisible: Boolean,
    handleDialogForm: Function
  },
  data() {
    return {
      form: {
        name: "",
        pass: ""
      },
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
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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

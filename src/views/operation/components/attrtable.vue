<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="属性名" prop="attrname"></el-table-column>
      <el-table-column label="属性值" prop="attrvalue"></el-table-column>
      <el-table-column align="right" width="600">
        <template slot="header">
          <input v-model.trim="addAttrName" size="mini" placeholder="请输入属性名" />
          <input
            v-model.trim="addAttrValue"
            size="mini"
            placeholder="请输入属性值"
            style="margin-left: 5px;"
          />
          <el-button size="mini" @click="handleAttrAdd" style="margin-left: 5px;">添加属性</el-button>
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="编辑单元格值" width="300px" :visible.sync="dialogEditVisible">
      属性名
      <div class="block"></div>
      <el-input type="text" v-model.trim="editAttrName"></el-input>
      <div class="block"></div>属性值
      <div class="block"></div>
      <el-input type="text" v-model.trim="editAttrValue"></el-input>
      <div class="block"></div>
      <div class="confirm-edit">
        <el-button type="primary" @click="handleAttrConfirm">确认修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          attrname: "音质",
          attrvalue: "高"
        },
        {
          attrname: "音质",
          attrvalue: "高"
        }
      ],
      addAttrName: "",
      addAttrValue: "",
      editAttrName: "",
      editAttrValue: "",
      dialogEditVisible: false
    };
  },
  methods: {
    handleAttrAdd(name = this.attrName, value = this.attrValue) {
      console.log(name, value);
      this.addAttrName = "";
      this.addAttrValue = "";
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleEdit(index, row) {
      const _row = JSON.parse(JSON.stringify(row));

      this.dialogEditVisible = true;
      this.editAttrName = _row.attrname;
      this.editAttrValue = _row.attrvalue;
    },
    handleAttrConfirm() {
      if (this.editAttrName === "" || this.editAttrValue === "") {
        this.$message.error("不能有空数值");
        return;
      }
      this.dialogEditVisible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.popover-input {
  margin-bottom: 10px;
}
.danger-but {
  margin-right: 150px;
}
.block {
  height: 20px;
}
.confirm-edit {
  text-align: center;
}
</style>
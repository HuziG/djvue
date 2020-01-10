<!--
 * @Descripttion: 
 * @version: 
 * @Author: dingjia z
 * @Date: 2019-12-21 14:16:28
 * @LastEditors  : dingjia z
 * @LastEditTime : 2020-01-10 17:27:01
 -->
<template>
  <div class="main fadeIn">
    <div class="view-title">权限信息</div>
    <div>
      <Tools :handleDialogForm="handleDialogAddForm" />
      <Table :tableData="tableData" :handleTableOperation="handleTableOperation" />
      <Pagination :currentChange="handleCurrentChange" />
      <AddForm :dialogFormVisible="addFormVisible" :handleDialogForm="handleDialogAddForm" />
      <EditForm
        :form="editFormData"
        :dialogFormVisible="editFormVisible"
        :handleDialogForm="handleDialogEditForm"
      />
    </div>
  </div>
</template>

<script>
import Table from "./components/table";
import Tools from "./components/tools";
import AddForm from "./components/addForm";
import EditForm from "./components/editForm";
import Pagination from "../../components/pagination";

export default {
  components: {
    Table,
    Tools,
    AddForm,
    EditForm,
    Pagination
  },
  data() {
    return {
      tableData: [
        {
          name: "李四",
          pass: "18352250991"
        }
      ],
      editFormData: {},
      addFormVisible: false,
      editFormVisible: false
    };
  },
  methods: {
    handleDialogAddForm() {
      this.addFormVisible = !this.addFormVisible;
    },
    handleDialogEditForm() {
      this.editFormVisible = !this.editFormVisible;
    },
    handleTableOperation(type, row) {
      if (type === "edit") {
        const rowData = JSON.parse(JSON.stringify(row));
        this.editFormData = rowData;
        this.editFormVisible = true;
      }
      if (type === "del") {
        console.log("delete");
      }
    },
    handleCurrentChange(e) {
      console.log(e);
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  background-color: #fff;
  border-radius: 3px;
  padding: 10px 20px;
  box-sizing: border-box;
}
.view-title {
  font-size: 22px;
  padding-top: 15px;
}
</style>

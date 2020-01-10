<!--
 * @Descripttion: 
 * @version: 
 * @Author: dingjia z
 * @Date: 2019-12-22 11:42:07
 * @LastEditors  : dingjia z
 * @LastEditTime : 2020-01-10 17:27:12
 -->
<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    height="500px"
    border
    :header-cell-style="rowStyle"
  >
    <el-table-column prop="name" label="管理员账号"></el-table-column>
    <el-table-column prop="pass" label="密码"></el-table-column>
    <el-table-column fixed="right" label="操作" width="150">
      <template slot-scope="scope">
        <div style="text-align: center;">
          <el-button @click="handleTableOperation('edit', scope.row)" type="text" size="mini">编辑</el-button>
          <el-button
            @click="handleTableOperation('del', scope.row)"
            type="text"
            size="mini"
            style="color: red;"
          >删除</el-button>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    tableData: Array,
    handleTableOperation: Function
  },
  methods: {
    rowStyle() {
      return "font-weight: 700;background-color: #F5F7FA;color: #333;";
    }
  }
};
</script>

<style lang="scss" scoped></style>

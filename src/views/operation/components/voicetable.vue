<template>
  <div>
    <el-table :data="tableData">
      <el-table-column label="音频名" width="200">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="音频文件">
        <template slot-scope="scope">
          <el-tag
            v-for="(item, index) in scope.row.file"
            :key="index"
            closable
            @close="handleFileDelete(scope.$index,index)"
          >
            {{item}}
            <i class="el-icon-edit" @click="handleEdit('编辑文件名',scope.$index,index,item)"></i>
            <VoicePlay
              :playId="playId"
              :id="`${scope.$index}${index}`"
              :url="'https://xxx1.com'"
              :handlePlayVoice="handlePlayVoice"
            />
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column width="330">
        <template slot="header">
          <input v-model.trim="voiceadd" size="mini" placeholder="输入音频名" style="padding: 0px 5px;" />
          <el-button size="mini" @click="handleVoiceAdd" style="margin-left: 5px;">添加音频</el-button>
        </template>
        <template slot-scope="scope">
          <el-button
            slot="reference"
            size="mini"
            @click="handleEdit('编辑音频名',scope.$index,0,scope.row.name)"
          >编辑音频名</el-button>
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            :limit="1"
            :on-success="handleFileUploadSucc"
            :on-error="handleFileUploadFail"
            style="display:inline-block;"
          >
            <el-button size="mini" class="add-file" @click="handleFileUpload(scope.$index)">
              上传音频文件
              <i class="el-icon-upload el-icon--right"></i>
            </el-button>
          </el-upload>
          <el-button
            size="mini"
            type="danger"
            class="del-but"
            @click="handleVoiceDelete(scope.$index)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :title="editDialogTitle" width="300px" :visible.sync="dialogEditVisible">
      值修改
      <div class="block"></div>
      <el-input type="text" v-model.trim="editTemplate.value"></el-input>
      <div class="block"></div>
      <div class="confirm-edit">
        <el-button type="primary" @click="handleEditConfirm">确认修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import VoicePlay from "./voiceplay";

export default {
  components: {
    VoicePlay
  },
  data() {
    return {
      playId: "",

      voiceadd: "",

      tableData: [
        {
          name: "森海",
          file: ["边缘敲击", "中间打击"]
        }
      ],

      editTemplate: {
        colIndex: "",
        rowIndex: "",
        value: ""
      },
      editDialogTitle: "",
      dialogEditVisible: false,

      voiceUploadIndex: ""
    };
  },
  methods: {
    // 音频添加
    handleVoiceAdd(val = this.voiceadd) {
      this.voiceadd = "";
      console.log(val);
    },
    // 音频删除
    handleVoiceDelete(index) {
      console.log(index);
    },
    // 音频文件上传成功
    handleFileUploadSucc(file) {
      console.log(file);
    },
    // 音频文件上传失败
    handleFileUploadFail() {
      console.log("upload fail");
    },
    // 音频文件上传
    handleFileUpload(index) {
      this.voiceUploadIndex = index;
      console.log(index);
    },
    // 音频文件删除
    handleFileDelete(colIndex, rowIndex) {
      console.log(colIndex, rowIndex);
    },
    // 编辑修改 click
    handleEdit(title, colIndex, rowIndex, value) {
      this.editDialogTitle = title;
      this.dialogEditVisible = true;

      this.editTemplate.colIndex = colIndex;
      this.editTemplate.rowIndex = rowIndex;
      this.editTemplate.value = value;
    },
    // 编辑修改确认
    handleEditConfirm(
      colIndex = this.editTemplate.colIndex,
      rowIndex = this.editTemplate.rowIndex,
      value = this.editTemplate.value
    ) {
      console.log(colIndex, rowIndex, value);
    },
    // 音频文件试听
    handlePlayVoice(id) {
      this.playId = id;
    }
  }
};
</script>

<style lang="scss" scoped>
.el-tag:nth-child(n + 2) {
  margin-left: 5px;
}
.del-but {
  margin-left: 5px;
}
.add-file {
  margin-left: 5px;
}
.edit-voice-name {
  margin-bottom: 10px;
}
.el-tag {
  i {
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    margin: 0 5px;
  }
  i:hover {
    background-color: #333;
    color: #fff;
    border-radius: 50px;
    cursor: pointer;
  }
}

.block {
  height: 20px;
}
.confirm-edit {
  text-align: center;
}
</style>
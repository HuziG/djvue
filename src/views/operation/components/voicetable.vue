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
            <i class="el-icon-edit"></i>
            <i class="el-icon-video-pause"></i>
            <i class="el-icon-video-play"></i>
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column width="330">
        <template slot="header">
          <input v-model.trim="voiceadd" size="mini" placeholder="输入音频名" style="padding: 0px 5px;" />
          <el-button size="mini" @click="handleVoiceAdd" style="margin-left: 5px;">添加音频</el-button>
        </template>
        <template slot-scope="scope">
          <el-popover placement="top" width="160" v-model="visible">
            <el-input type="text" size="mini" class="edit-voice-name" v-model="voicename"></el-input>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="visible = false">取消</el-button>
              <el-button type="primary" size="mini" @click="handleVoiceNameEdit(scope.$index)">确定</el-button>
            </div>
            <el-button slot="reference" size="mini" @click="voicename = scope.row.name">编辑音频名</el-button>
          </el-popover>
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            :limit="1"
            :on-success="handleFileUploadSucc"
            :on-error="handleFileUploadFail"
            style="display:inline-block;"
          >
            <el-button size="mini" class="add-file">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      voicename: "",
      voiceadd: "",
      visible: false,
      tableData: [
        {
          name: "森海",
          file: ["边缘敲击", "中间打击"]
        }
      ]
    };
  },
  watch: {
    visible(val) {
      if (!val) {
        this.voicename = "";
      }
    }
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
    // 音频名称修改
    handleVoiceNameEdit(index, val = this.voicename) {
      this.visible = false;
      if (val === "") {
        return;
      }
      console.log(index);
      console.log(val);
    },
    // 音频文件上传成功
    handleFileUploadSucc(file) {
      console.log(file);
    },
    // 音频文件上传失败
    handleFileUploadFail() {
      console.log("upload fail");
    },
    // 音频文件删除
    handleFileDelete(rowindex, tagindex) {
      console.log(rowindex);
      console.log(tagindex);
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
</style>
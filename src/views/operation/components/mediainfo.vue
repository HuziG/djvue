<!--
 * @Descripttion: 产品操作 步骤3
 * @version: 
 * @Author: dingjia z
 * @Date: 2020-01-08 09:50:31
 * @LastEditors  : dingjia z
 * @LastEditTime : 2020-01-10 15:37:19
 -->
<template>
  <div>
    <div class="h2">媒体信息编辑</div>
    <div class="main">
      <el-tabs v-model="activeName">
        <el-tab-pane label="缩略图上传" name="small-pic">
          <div class="tab-main">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleSmallPicRemove"
              :before-upload="beforeSmallPicUpload"
            >
              <i class="el-icon-plus"></i>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt />
            </el-dialog>
          </div>
        </el-tab-pane>
        <el-tab-pane label="图册上传" name="big-pic">
          <div class="tab-main">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleSmallPicRemove"
              :before-upload="beforeSmallPicUpload"
            >
              <i class="el-icon-plus"></i>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt />
            </el-dialog>
          </div>
        </el-tab-pane>
        <el-tab-pane label="视频上传" name="video">
          <div class="tab-main">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-remove="handleVideoRemove"
              :before-upload="beforeVideoUpload"
              :limit="1"
              :file-list="fileList"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </div>
        </el-tab-pane>
        <el-tab-pane label="音频上传" name="voice">
          <div class="tab-main">
            <VoiceTable />
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="but-nav">
      <el-button type="primary" class="prev" @click="handleStep(1)">上一步</el-button>
      <el-button type="primary" class="next" @click="handleStep(3)">下一步</el-button>
    </div>
  </div>
</template>

<script>
import VoiceTable from "./voicetable";

export default {
  components: {
    VoiceTable
  },
  props: {
    handleStep: Function
  },
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      fileList: [],
      activeName: "small-pic"
    };
  },
  methods: {
    handleSmallPicRemove(file, fileList) {
      console.log(file, fileList);
    },
    beforeSmallPicUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleVideoRemove(file, fileList) {
      console.log(file, fileList);
    },
    beforeVideoUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("../index.scss");
.small-pic {
  height: 200px;
}
.video {
  height: 100px;
}
.vice-title {
  margin-bottom: 15px;
}
</style>
<template>
  <div class="contribute animate__animated animate__backInLeft">
    <!-- <div class="contribute-box">
      <el-upload
        class="avatar-uploader"
        :action="actionUrl"
        :show-file-list="false"
        :on-success="handleVideoSuccess"
        :before-upload="beforeUploadVideo"
        drag
        accept=".mp4,.ogg,.flv,.avi,.wmv,.rmvb"
      >
        <i class="el-icon-upload"></i>
        
       <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      </el-upload>
       <div class="el-upload__tip" slot="tip" style="color:red;margin-left:5%">注：只能上传视频文件，且不超过100MB</div>
    </div> -->
    <div class="contribute-box-upload">
      <h3>投稿信息</h3>
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">上传封面</div>
      </el-upload>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="*标题">
          <el-input
            type="textarea"
            v-model="form.desc"
            :autosize="{ minRows: 1, maxRows: 1 }"
            maxlength="30"
              show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item label="分类">
          <el-select v-model="form.region" placeholder="分类">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="标签">
          <p style="font-size: 5px">添加话题增加曝光哦，最多添加四个</p>
          <el-tag
            :key="tag"
            v-for="tag in dynamicTags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)"
          >
            {{ tag }}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-show="inputVisible === true"
            v-model="inputValue"
            ref="saveTagInput"
            clearable
            size="small"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          >
          </el-input>
          <el-button
            v-show="inputVisible === false"
            class="button-new-tag"
            size="small"
            @click="showInput"
            >+ New Tag</el-button
          >
        </el-form-item>
        <el-form-item label="*简介">
          <el-input
            type="textarea"
            v-model="form.desc"
            :autosize="{ minRows: 6, maxRows: 6 }"
            maxlength="255"
            show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  watch: {
    dynamicTags: {
      handler(newValue, oldValue) {
        console.log(newValue.length);
        if (newValue.length === 0) {
          this.inputVisible = false;
        }
      },
    },
  },
  data() {
    return {
      form: {
        videoUrl1: "",
      },
      actionUrl: "",
      load: false,
      imageUrl: "",
      dynamicTags: [],
      inputVisible: false,
      inputValue: "",
      tempTag: "",
      isChange: false,
      isRepeatedData: false,
    };
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.tempTag = "";
      this.inputVisible = true;
      this.inputValue = "";
      this.isChange = false;
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      this.isRepeatedData = false;
      let inputValue = this.inputValue;
      //去除空格
      inputValue = inputValue.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
      if (inputValue == "") {
        this.inputVisible = false;
        return;
      }
      //判断新增的值是否重复
      if (
        this.dynamicTags.indexOf(inputValue) != -1 &&
        this.tempTag != inputValue
      ) {
        this.isRepeatedData = true;
        this.openWarring();
        return;
      } else {
        this.isRepeatedData = false;
      }
      //判断是否修改原有的值，是则替换修改好的值，否则新增
      if (this.isChange) {
        this.dynamicTags[
          this.dynamicTags.indexOf(this.tempTag)
        ] = this.inputValue;
        this.inputVisible = false;
        return;
      }
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
      if (this.dynamicTags.length >= 3) {
        this.inputVisible = null;

        console.log(this.inputVisible);
      }
    },

    changeValue(tag) {
      this.inputVisible = true;
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
      this.inputValue = tag;
      this.tempTag = tag;
      this.isChange = true;
    },

    //提示
    openWarring(text) {
      if (!text) {
        var text = "警告!不允许添加重复数据！";
      }
      this.$message({
        message: text,
        type: "warning",
        duration: "1000",
      });
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG /PNG格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    beforeUploadVideo(file) {
      const isLtq100M = file.size / 1024 / 1024 < 100;
      if (
        [
          "video/mp4",
          "video/ogg",
          "video/flv",
          "video/avi",
          "video/wmv",
          "video/rmvb",
        ].indexOf(file.type) == -1
      ) {
        //'video/ogg', 'video/flv', 'video/avi', 'video/wmv', 'video/rmvb'
        this.$message.error("请上传正确的视频格式");
        return false;
      }
      if (!isLtq100M) {
        this.$message.error("上传视频大小不能超过100MB哦!");
        return false;
      }
      this.isShowUploadVideo = false;
      this.load = true;
    },

    //上传成功回调
    handleVideoSuccess(res, file) {
      this.form.videoUrl1 = URL.createObjectURL(file.raw);
      this.form.videoUrl = res.data;

      if (res.code == 1) {
        this.load = false;
      } else {
        this.$message.error("视频上传失败，请重新上传！");
      }
    },
  },
};
</script>
<style >
.contribute {
  height: 100%;
  width: 100%;
}
.el-upload-dragger {
  width: 800px;
  height: 600px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.contribute-box {
  width: 100%;
  height: 100%;
  margin-left: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.contribute-box-upload {
  width: 100%;
  height: 100%;
  margin-left: 50px;
  padding: 1%;

  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  height: 120px;
  width: 300px;
  padding-top: 50px;
  align-items: center;
  text-align: center;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
el-tag + .el-tag {
  margin-left: 0px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 150px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
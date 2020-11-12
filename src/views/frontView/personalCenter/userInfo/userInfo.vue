<template>
  <div class="userinfo animate__animated animate__backInLeft">
    <div class="basicinfo">
      <div class="title">
        <h1>基本信息</h1>
        <span class="basic">Basic Information</span>
      </div>
      <div class="body">
        <div class="left">
          <img
            :src="form.headPortrait"
            alt
            class="head-img"
          />
        </div>
        <div class="right">
          <div>
            <span>{{ form.username }} </span>
            <span>uid:{{ tag.id }}</span>
          </div>
          <div>
            <span>注册于 </span>
            <span>{{ form.registrationTime }}</span>
          </div>
          <div ref="text">
            <span s>{{ form.signature }}</span>
          </div>
        </div>
      </div>
      <div class="bottom">
        <el-button type="primary" icon="el-icon-edit" @click="showCutter = true"
          >修改头像</el-button
        >
        <avatar-cutter
          v-bind:imgSrc="imgSrc"
          v-if="showCutter"
          @cancel="showCutter = false"
          return-type="url"
          @enter="uploadAvatar"
        ></avatar-cutter>
        <el-button
          type="primary"
          icon="el-icon-edit"
          style
          @click="dialogFormVisible = true"
          >修改个性签名</el-button
        >
        <el-dialog title="修改个性签名" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="">
              <el-input v-model="form.signature" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button
              type="primary"
              @click="
                (dialogFormVisible = false),
                  alter(`signature`, form.signature, null)
              "
              >确 定</el-button
            >
          </div>
        </el-dialog>
        <el-button type="primary" icon="el-icon-edit" style="margin-left: 65%"
          >修改密码</el-button
        >
      </div>
    </div>
    <div class="extrainfo">
      <div class="title">
        <h1>拓展信息</h1>
        <span class="basic2">Extra Information</span>
      </div>
      <div class="extrainfo-body">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="性别">
            <el-select v-model="form.gender" placeholder="不公开">
              <el-option label="不公开" value="shanghai"></el-option>
              <el-option label="男" value="beijing"></el-option>
              <el-option label="女" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="性取向">
            <el-select v-model="form.sexualOrientation" placeholder="不公开">
              <el-option label="不公开" value="shanghai"></el-option>
              <el-option label="异性恋" value="shanghai"></el-option>
              <el-option label="同性恋" value="beijing"></el-option>
              <el-option label="双性恋" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="邮箱验证">
            <span>{{ form.mailbox }}</span>
            <el-button
              type="primary"
              icon="el-icon-edit"
              style="margin-left: 10%"
              @click="dialogFormEmal = true"
              >修改</el-button
            >
            <el-dialog title="修改邮箱" :visible.sync="dialogFormEmal">
              <el-form :model="form">
                <el-form-item label="">
                  <el-input
                    v-model="form.mailbox"
                    type="emmail"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormEmal = false">取 消</el-button>
                <el-button
                  type="primary"
                  @click="
                    (dialogFormEmal = false),
                      alter(`mailbox`, form.mailbox, null)
                  "
                  >确 定</el-button
                >
              </div>
            </el-dialog>
          </el-form-item>
          <el-form-item label="手机号">
            <span>{{ form.mobilePhone }}</span>
            <el-button
              type="primary"
              icon="el-icon-edit"
              style="margin-left: 10%"
              @click="dialogFormEmal = true"
              >修改</el-button
            >
            <el-dialog title="修改电话" :visible.sync="dialogFormTle">
              <el-form :model="form">
                <el-form-item label="">
                  <el-input
                    v-model="form.mobilePhone"
                    type="number"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormTle = false">取 消</el-button>
                <el-button
                  type="primary"
                  @click="
                    (dialogFormTle = false),
                      alter(`mobilePhone`, form.mobilePhone, null)
                  "
                  >确 定</el-button
                >
              </div>
            </el-dialog>
          </el-form-item>
          <el-form-item label="所在地">
            <!-- <el-select v-model="form.locationProvince" placeholder="不公开">
              <el-option label="不公开" value="shanghai"></el-option>
              <el-option label="湖南" value="shanghai"></el-option>
              <el-option label="湖南" value="beijing"></el-option>
              <el-option label="湖南" value="beijing"></el-option>
            </el-select>
            <el-select v-model="form.locationCity" placeholder="不公开">
              <el-option label="不公开" value="shanghai"></el-option>
              <el-option label="长沙" value="shanghai"></el-option>
              <el-option label="长沙" value="beijing"></el-option>
              <el-option label="长沙" value="beijing"></el-option>
            </el-select> -->
            <VDistpicker
              @selected="proviceAddress"
              hide-area
              :province="form.locationProvince"
              :city="form.locationCity"
            ></VDistpicker>
          </el-form-item>
          <el-button
            type="primary"
            icon="el-icon-edit"
            @click="alterAll(null, null, form)"
            >保存个人资料</el-button
          >
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import VDistpicker from "v-distpicker";
import AvatarCutter from "../../../../components/avatar-cutter/avatar-cutter";
export default {
  data() {
    return {
      form: {
        gender: "不公开",
        headPortrait: "https://imgs.aixifan.com/style/image/defaultAvatar.jpg",
        locationCity: "不公开",
        locationProvince: "不公开",
        mailbox: "未填写",
        mobilePhone: "未填写",
        sexualOrientation: "不公开",
        signature: "这家话很懒什么都没留下",
        username: "游客",
        registrationTime:"2020-1-1"
      },
      tag: "",
      time: "",
      dialogFormVisible: false,
      dialogFormTle: false,
      dialogFormEmal: false,
      imgSrc: "https://imgs.aixifan.com/style/image/defaultAvatar.jpg",
      showCutter: false, // 是否显示头像裁剪组件
      userInfo: {},
    };
  },
  components: {
    VDistpicker,
    AvatarCutter,
  },
  created() {
    this.onHomeCreate();
  },
  mounted() {
    this.$refs.text.contentEditable = true;
  },
  methods: {
    // 上传裁剪好的头像
    uploadAvatar(src) {
      
      this.imgSrc = src;
      this.showCutter = false;
      this.form.headPortrait=src;
      this.alter(`headPortrait`,  this.form.headPortrait, null)
      console.log( src);
    },

    proviceAddress(data) {
      this.form.locationProvince = data.province.value;
      this.form.locationCity = data.city.value;
      console.log(data.city.value);
    },
    async onHomeCreate() {
      this.$http
        .get("/userInfo", {
          headers: {
            Authorization: "Bearer " + this.$cookies.get("token"),
          },
        })
        .then((res) => {
          console.log(res.data);
          this.tag = res.data;
          let tag = res.data;
          for (var key in tag) {
            this.form[key] = tag[key];
            // console.log(key, tag[key]);
          }
          this.$store.commit('lodaUser',this.form)
        })
        .catch((error) => {
          if (error.response) {
            this.$message({
              showClose: true,
              message: "加载失败",
              type: "error",
            });
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
        });
    },
    alterAll() {
      let arr = {};
      this.alter(null, null, this.form);
    },
    alter(string, elment, isAll) {
       this.$store.commit('lodaUser',this.form)
      if (isAll == null) {
        let json = string.toString;
        var formData = {};
        formData[string] = elment;
      } else {
        formData = isAll;
      }
      console.log(formData);
      this.$http
        .post("/userInfo", formData, {
          headers: {
            Authorization: "Bearer " + this.$cookies.get("token"),
          },
        })
        .then((res) => {
         
          this.$message({
            showClose: true,
            message: "修改个性信息成功",
            type: "success",
          });

          console.log(res.data);
        })
        .catch((error) => {
          if (error.response) {
            this.$message({
              showClose: true,
              message: "修改失败",
              type: "error",
            });
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
        });
    },
  },
};
</script>
<style scope>
.userinfo {
  width: 100%;
  height: 100%;
  margin-left: 3%;
}
.userinfo .basicinfo {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.userinfo .extrainfo {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 65%;
  padding: 1%;
  margin-top: 3%;
}
.userinfo .title {
  display: flex;
  flex-direction: row;
}
.userinfo .title .basic {
  margin-top: 0.65%;
  margin-left: 5px;
  color: darkgrey;
}
.userinfo .title .basic2 {
  margin-top: 0.65%;
  margin-left: 5px;
  color: darkgrey;
}
.userinfo .extrainfo-body {
  margin-top: 3%;
}
.userinfo .body {
  height: 40%;
  margin-top: 2%;
  display: flex;
  flex-direction: row;
}
.userinfo .bottom {
  width: 100%;
  margin-top: 5%;
  height: 100%;
}
.userinfo .body .left {
  width: 15%;
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
}
.userinfo .body .right {
  /* width: 15%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  align-items: center;
}
.userinfo .basicinfo {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 1%;
  height: 40%;
  width: 100%;
}
.userinfo .basicinfo .head-img {
  border-radius: 1000px;
  height: 100%;
  width: 50%;
}
</style>
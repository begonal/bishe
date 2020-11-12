<template>
  <div class="login">
    <div class="login_box">
      <h3>登录</h3>
      <el-form ref="formref" :model="userInfo" :rules="rules">
        <el-form-item prop="user" style="width:320px ;">
          <el-input placeholder="请输入用户名" prefix-icon="el-icon-search" v-model="userInfo.user"></el-input>
        </el-form-item>
        <el-form-item prop="user" style="width:320px ;">
          <el-input
            show-password
            placeholder="请输入密码"
            prefix-icon="el-icon-search"
            style="width:320px ;margin-top: 20px;"
            v-model="userInfo.password"
          ></el-input>
        </el-form-item>
        <el-form-item style="width:320px;">
          <el-button type="primary" round @click="onLogin()">登录</el-button>
        </el-form-item>
      </el-form>

      <div class="toRegister">
        <span style="magrin-top:30px">
          没有账号？点击
          <router-link to="/register">这里</router-link>注册
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: {
        user: "",
        password: "",
      },
      rules: {
        user: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 16, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    async onLogin() {
      this.$refs.formref.validate((valid) => {
        if (valid) {
          this.$http
            .post("login", {
              user: this.userInfo.user,
              pwd: this.userInfo.password,
            })
            .then((res) => {
              this.$message({
                showClose: true,
                message: "登录成功",
                type: "success",
              });
              
              this.$cookies.set("token", res.data.token);
              this.$router.push("/Home");
            })
            .catch((error) => {
              if (error.response) {
                this.$message({
                  showClose: true,
                  message: "账号或密码错误",
                  type: "error",
                });
              } else if (error.request) {
                console.log(error.request);
              } else {
                console.log("Error", error.message);
              }
            });
        }
      });
    },
    hrefregister() {
      this.$route.push({ path: "/register" });
    },
  },
};
</script>
<style scoped>
.login {
  background-color: #2b4b6b;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.toRegister {
  margin-top: 30px;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
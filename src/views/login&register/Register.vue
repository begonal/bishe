<template>
  <div class="register">
    <div class="register_box">
      <el-form ref="formref" :model="form" :rules="rules">
        <el-form-item style="width: 320px">
          <h3>注册</h3>
        </el-form-item>
        <el-form-item prop="user" style="width: 320px">
          <el-input
            placeholder="请输入用户名"
            prefix-icon="el-icon-search"
            v-model="form.user"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password" style="width: 320px">
          <el-input
            show-password
            id="login_password"
            placeholder="请输入密码"
            prefix-icon="el-icon-search"
            v-model="form.password"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password2" style="width: 320px">
          <el-input
            show-password
            id="login_password"
            placeholder="请输入确认密码"
            prefix-icon="el-icon-search"
            style="width: 100%"
            v-model="form.password2"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            round
            style="width: 150px"
            @click="onRegister()"
            >注册</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goHome() {
      this.$router.push({ path: "/home" });
    },
    async onRegister() {
      this.$refs.formref.validate((valid) => {
        if (valid) {
          this.$http
            .post("register", {
              user: this.form.user,
              pwd: this.form.password,
            })
            .then((res) => {
              this.$message({
                showClose: true,
                message: "注册成功",
                type: "success",
              });
               this.$cookies.set("token", res.data.token);
              this.goHome();
            })
            .catch((error) => {
              if (error.response) {
                this.$message({
                  showClose: true,
                  message: "注册失败",
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
  },
  data() {
    let passRuel = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }
      let reg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,20}$/;
      if (!reg.test(value)) {
        callback(new Error("密码包含 数字,英文,字符中的两种以上，长度6-20"));
      } else {
        callback();
      }
    };
    let pass2Ruel = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入确认密码"));
      }
      if (value != this.form.password) {
        callback(new Error("两次密码不一致"));
      } else {
        callback();
      }
    };
    return {
      form: {
        user: "",
        password: "",
        password2: "",
      },
      rules: {
        user: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 16,
            message: "长度在 3 到 16 个字符",
            trigger: "blur",
          },
        ],
        password: [{ required: true, validator: passRuel, trigger: "blur" }],
        password2: [{ required: true, validator: pass2Ruel, trigger: "blur" }],
      },
    };
  },
};
</script>
<style scoped>
.register {
  background-color: #2b4b6b;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.register_box {
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
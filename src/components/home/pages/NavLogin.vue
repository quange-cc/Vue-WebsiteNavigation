<template>

  <el-main>
    <el-row type="flex" justify="center" style="padding: 200px">

      <el-col :span="5">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>管理员登录</span>
          </div>

          <!--登录表单区域-->
          <el-form
              :model="loginForm"
              :rules="rules"
              ref="loginForm"
              status-icon
              class="demo-ruleForm"
          >
            <!-- 用户名-->
            <el-form-item prop="username">
              <el-input type="text" v-model="loginForm.username" prefix-icon="el-icon-user-solid"
                        placeholder="请输入用户名"></el-input>
            </el-form-item>
            <!-- 密码-->
            <el-form-item prop="passwd">
              <el-input type="password" v-model="loginForm.passwd" prefix-icon="el-icon-search"
                        placeholder="请输入密码"></el-input>
            </el-form-item>

            <el-form-item style="display: flex;justify-content: center">
              <el-button type="primary" @click="loginSubmit('loginForm')">登录</el-button>
              <el-button>注册</el-button>
            </el-form-item>
          </el-form>
        </el-card>

      </el-col>
    </el-row>
  </el-main>


</template>

<script>
import {mapState, mapMutations} from "vuex";

export default {
  name: "NavLogin",

  data() {
    // 验证用户名
    const validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名！'));
      }
      callback();
    };

    // 验证密码
    const validatePasswd = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码！'));
      }
      callback();
    };

    return {
      loginForm: {username: '', passwd: ''},

      rules: {
        username: [{
          validator: validateUsername, trigger: 'blur'
        }],
        passwd: [{
          validator: validatePasswd, trigger: 'blur'
        }]
      }
    }

  },
  computed: {
    ...mapState('loginData', ['loginFormVisible'])
  },
  methods: {
    ...mapMutations('loginData', {closeLogin: 'CLOSE-LOGIN', successLogin: 'SUCCESS-LOGIN'}),

    // 登录按钮
    loginSubmit(val) {

      this.$refs[val].validate((valid) => {
        if (valid) {
          // 提交数据
          this.axios.post('api/login', this.loginForm).then(resp => {
            // 判断返回的状态码，1001 登录成功
            if (resp.data.code === 1001) {
              // 弹出登录成功提示
              this.$message.success('登录成功')
              // 设置cookies-token
              this.$cookies.set('token', resp.data.data, 60 * 60, "/", "", true, "None")
              // 设置登录成功状态
              this.successLogin();
              // 关闭登录界面
              this.closeLogin();
              // 跳到后台
              this.$router.push('/admin/home')
            } else {
              // 登录失败
              this.$message.error('用户名或密码错误')
            }
          });

        } else {
          this.$message.error('请输入登录信息哦')
          return false;
        }
      });
    }

  }

}

</script>

<style scoped>

</style>
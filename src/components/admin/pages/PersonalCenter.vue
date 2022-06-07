<template>
  <el-main>
    <el-row>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>管理密码修改</span>
          </div>

          <el-form :model="passwdForm" status-icon :rules="rules" ref="passwdForm">

            <el-form-item label="旧密码" prop="oldPasswd">
              <el-input type="password" v-model="passwdForm.oldPasswd" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="新密码" prop="newPasswd">
              <el-input type="password" v-model="passwdForm.newPasswd" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="确认密码" prop="checkPasswd">
              <el-input type="password" v-model="passwdForm.checkPasswd" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="changePasswd(passwdForm)">修改</el-button>
            </el-form-item>
          </el-form>

        </el-card>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
export default {
  name: "PersonalCenter",
  data() {

    const validateOldPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入旧密码'));
      }
      callback();
    };

    const validateNewPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入新密码'));
      }
      callback();
    };

    const validateCheckPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入新密码'));
      } else {
        if (value === this.passwdForm.newPasswd) {
          callback();
        }
        callback(new Error('两次密码不一致'));
      }
    };

    return {
      passwdForm: {
        oldPasswd: '',
        newPasswd: '',
        checkPasswd: '',
        token: this.$cookies.get("token"),
      },
      rules: {
        oldPasswd: [{validator: validateOldPass, trigger: 'blur'}],
        newPasswd: [{validator: validateNewPass, trigger: 'blur'}],
        checkPasswd: [{validator: validateCheckPass, trigger: 'blur'}]
      }
    }


  },
  methods: {

    // 修改密码
    changePasswd(passwdForm) {
      this.$refs.passwdForm.validate((valid) => {
        if (valid) {
          // 发送修改请求
          this.axios.post('api/updatePasswd', passwdForm).then(resp => {
            if (resp.data.code === 2003) {
              this.$message.success('密码修改成功!')
              this.$refs.passwdForm.resetFields();
            } else {
              this.$message.error('密码修改失败！')
            }
          });
        } else {
          return false
        }
      });


    }
  }
}
</script>

<style scoped>

</style>
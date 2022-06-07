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
              <el-button type="primary" @click="changePasswd('ruleForm')">修改</el-button>
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
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入旧密码'));
      } else {
        if (this.rules.newPasswd !== '') {
          this.$refs.passwdForm.validateField('checkPasswd');
        }
        callback();
      }
    };

    return {
      passwdForm: {
        oldPasswd: '',
        newPasswd: '',
        checkPasswd: ''
      },
      rules: {
        oldPasswd: [{validator: validatePass, trigger: 'blur'}]
      }
    }


  },
  methods: {

    // 修改密码
    changePasswd() {

    }
  }
}
</script>

<style scoped>

</style>
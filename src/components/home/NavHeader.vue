<template>
  <el-header style="padding: 0">

    <el-menu
        class="el-menu-vertical-demo"
        mode="horizontal"
        :router="true"
    >

      <el-menu-item @click="openSidebar">
        <i class="el-icon-s-fold" v-show="!isCollapse"></i>
        <i class="el-icon-s-unfold" v-show="isCollapse"></i>
      </el-menu-item>



      <el-menu-item
          v-show="!loginStatus"
          style="float: right"
      >
        注册
      </el-menu-item>

      <el-menu-item
          index="login"
          @click="openLogin"
          v-show="!loginStatus"
          style="float: right"
      >
        登录
      </el-menu-item>


      <el-submenu style="float: right;" v-show="loginStatus" index="/">
        <template slot="title">admin</template>
        <el-menu-item :index="{name:'adminHome'}">控制面板</el-menu-item>
        <el-menu-item index="99-2" @click="quitLogin">退出登录</el-menu-item>
      </el-submenu>

    </el-menu>

  </el-header>


</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: "NavHeader",
  mounted() {
    this.vaLiDataToken()
  },
  computed: {
    ...mapState('loginData', ['loginStatus']),
    ...mapState('webSites', ['isCollapse'])
  },
  methods: {
    ...mapMutations('loginData', {
      openLogin: 'OPEN-LOGIN',
      quitLogin: 'QUIT-LOGIN',
      vaLiDataToken: 'VALIDATE-TOKEN'
    }),
    ...mapMutations('webSites', {
      openSidebar: 'switch-sidebar'
    }),

  }
};
</script>

<style scoped>

</style>
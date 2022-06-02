<template>
  <el-header style="padding: 0">
    <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">

      <el-menu-item @click="openSidebar">
        <i class="el-icon-s-fold" v-show="!isCollapse"></i>
        <i class="el-icon-s-unfold" v-show="isCollapse"></i>
      </el-menu-item>

      <el-menu-item index="1">首页</el-menu-item>

      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>

      <el-menu-item @click="openLogin" v-show="!loginStatus" style="float: right">
        登录
      </el-menu-item>

      <el-submenu index="99" style="float: right;" v-show="loginStatus">
        <template slot="title">admin</template>
        <el-menu-item index="99-1">控制面板</el-menu-item>
        <el-menu-item index="99-2" @click="quitLogin">退出登录</el-menu-item>
        <router-link to="/admin/home">后台</router-link>
      </el-submenu>

    </el-menu>

    <NavLogin></NavLogin>
  </el-header>


</template>

<script>
import {mapMutations, mapState} from "vuex";
import NavLogin from "@/components/home/pages/NavLogin";

export default {
  name: "NavHeader",
  components: {NavLogin},
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
    })
  }
};
</script>

<style scoped>

</style>
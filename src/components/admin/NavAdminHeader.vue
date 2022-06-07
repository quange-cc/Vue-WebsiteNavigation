<template>
  <el-header>
    <el-menu
        class="el-menu-demo"
        mode="horizontal"
        :router="true"
    >

      <el-menu-item @click="openSidebar">
        <i class="el-icon-s-fold" v-show="!isCollapse"></i>
        <i class="el-icon-s-unfold" v-show="isCollapse"></i>
      </el-menu-item>

      <el-menu-item index="/admin">主页</el-menu-item>

      <el-menu-item index="/">前台</el-menu-item>


      <el-submenu index="123">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>


      <el-submenu index="12" style="float: right">
        <template slot="title">
          <el-avatar :size="30" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          admin
        </template>
        <el-menu-item :index="{name:'personalCenter'}">个人中心</el-menu-item>
        <el-menu-item index="2-3">退出登录</el-menu-item>
      </el-submenu>

    </el-menu>

  </el-header>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: "NavAdminHeader",
  computed: {
    ...mapState('layoutData', ['isCollapse'])
  },
  methods: {
    ...mapMutations('layoutData', {
      openSidebar: 'switch-sidebar'
    }),

  }
}
</script>

<style scoped>

</style>
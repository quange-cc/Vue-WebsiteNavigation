<template>
  <el-header style="padding: 0">
    <el-menu
        class="el-menu-demo"
        mode="horizontal"
        :router="true"
    >

      <el-menu-item @click="openSidebar">
        <i class="el-icon-s-fold" v-show="!isCollapse"></i>
        <i class="el-icon-s-unfold" v-show="isCollapse"></i>
      </el-menu-item>

      <el-menu-item index="">主页</el-menu-item>

      <el-menu-item index="/">前台</el-menu-item>

      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
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
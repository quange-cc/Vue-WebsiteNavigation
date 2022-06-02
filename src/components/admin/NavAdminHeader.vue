<template>
  <el-header style="padding: 0">
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect">

      <el-menu-item @click="openSidebar">
        <i class="el-icon-s-fold" v-show="!isCollapse"></i>
        <i class="el-icon-s-unfold" v-show="isCollapse"></i>
      </el-menu-item>

      <el-menu-item index="22">
        <router-link to="/">首页</router-link>
      </el-menu-item>

      <el-menu-item index="11">
        <router-link to="/admin/home">主页</router-link>
      </el-menu-item>

      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>

  </el-header>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: "NavAdminHeader",
  data() {
    return {
      activeIndex: '1',
    };
  },
  computed: {
    ...mapState('layoutData', ['isCollapse'])
  },
  methods: {
    ...mapMutations('layoutData', {
      openSidebar: 'switch-sidebar'
    }),

    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
</style>
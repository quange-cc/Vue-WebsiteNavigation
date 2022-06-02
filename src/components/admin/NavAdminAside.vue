<template>
  <el-aside style="line-height: 100vh" :width="isCollapse ? '65px':'200px'">

    <el-menu
        :default-active="$route.path"
        class="el-menu-vertical"
        @open="handleOpen"
        @close="handleClose"
        :collapse-transition="false"
        :router="true"
        :collapse="isCollapse">

      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">信息管理</span>
        </template>
        <el-menu-item :index="{name:'wsm'}">网址信息管</el-menu-item>
        <el-menu-item :index="{name:'sortManage'}">分类信息管理</el-menu-item>
      </el-submenu>

      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>

      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "NavAdminAside",
  data() {
    return {};
  },
  computed: {
    ...mapState('layoutData', ['isCollapse'])
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.el-menu-vertical{
  height: 100vh;
}
</style>
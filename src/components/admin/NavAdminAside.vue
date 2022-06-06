<template>
  <el-aside :width="isCollapse ? '65px':'200px'">

    <el-menu
        :default-active="$route.path"
        class="el-menu-vertical"
        :collapse-transition="false"
        :router="true"
        :collapse="isCollapse">

      <el-submenu index="11">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">信息管理</span>
        </template>
        <el-menu-item :index="{name:'sortManage'}">分类信息管理</el-menu-item>
        <el-menu-item :index="{name:'wsm'}">网址信息管理</el-menu-item>
        <el-menu-item :index="{name:'styleManage'}">样式信息管理</el-menu-item>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">系统设置</span>
        </template>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
      </el-submenu>


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

  methods: {}
}
</script>

<style scoped>
.el-menu-vertical {
  height: 100vh;
}
</style>
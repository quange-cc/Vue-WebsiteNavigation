<template>
  <el-aside  :width="isCollapse ? '65px':'200px'">

    <el-menu
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        :collapse-transition="false"
        :collapse="isCollapse"
        :router="true"
    >
      <el-menu-item index="/">
        <h3>网址导航</h3>
      </el-menu-item>

      <template v-for="(val, key) in webSiteData">
        <el-submenu :index="`${key}`" :key="key">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{ key }}</span>
          </template>
          <el-menu-item-group>
            <template v-for="(v,key) in val">
              <el-menu-item :index="`1-${key}`" :key="v.name">{{ v.name }}</el-menu-item>
            </template>
          </el-menu-item-group>
        </el-submenu>
      </template>

      <el-menu-item index="/about">
        <i class="el-icon-setting"></i>
        <span slot="title">关于</span>
      </el-menu-item>

    </el-menu>

  </el-aside>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "NavAside",
  methods: {},
  computed: {
    ...mapState('webSites', ['webSiteData', 'isCollapse'])
  }
}
</script>

<style scoped>
.el-menu-vertical-demo {
  height: 100vh;
}
</style>
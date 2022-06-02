<template>
  <el-aside style="line-height: 100vh; width: 200px">
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">

      <template v-for="(val, key, index) in webSiteData">
        <el-submenu :index="`${index + 1}`" :key="key">
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


      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>导航er</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>


      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航er</span>
      </el-menu-item>

    </el-menu>

  </el-aside>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "NavAside",
  methods: {
  },
  computed: {
    ...mapState('webSites', ['webSiteData'])
  }
}
</script>

<style scoped>
.el-menu-vertical-demo {
  height: 100vh;
}
</style>
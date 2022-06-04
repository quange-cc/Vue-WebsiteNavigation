<template>
  <el-aside style="line-height: 100vh" :width="isCollapse ? '65px':'200px'">

    <el-menu
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        :collapse-transition="false"
        active-text-color="#ffd04b"
        :collapse="isCollapse"
    >

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


      <el-menu-item index="42">
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
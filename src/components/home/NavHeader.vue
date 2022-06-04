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

      <el-menu-item index="/">
        首页
      </el-menu-item>

      <el-menu-item index="login" style="float: right">
        登录
      </el-menu-item>

    </el-menu>

  </el-header>


</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: "NavHeader",
  mounted() {
  },
  computed: {
    ...mapState('webSites', ['isCollapse'])
  },
  methods: {
    ...mapMutations('webSites', {
      openSidebar: 'switch-sidebar'
    }),

  }
};
</script>

<style scoped>

</style>
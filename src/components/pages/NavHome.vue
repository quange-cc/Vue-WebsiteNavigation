<template>
  <el-container>
    <NavAside></NavAside>
    <el-container direction="vertical">
      <NavHeader></NavHeader>
      <router-view></router-view>
      <NavFooter></NavFooter>
    </el-container>
  </el-container>
</template>

<script>
import {mapActions} from "vuex";

import NavAside from "@/components/home/NavAside";
import NavHeader from "@/components/home/NavHeader";
import NavFooter from "@/components/home/NavFooter";

export default {
  name: "NavHome",
  components: {NavFooter, NavHeader, NavAside},
  mounted() {
    this.verifyStatus();
  },
  methods: {
    ...mapActions('isToken', {
      verifyStatus: 'VERIFY-LOGIN-STATUS'
    })
  }
}
</script>

<style scoped>
.el-header {
  padding: 0;
}

.el-main {
  /*padding: 0 16px !important;*/
  height: calc(100vh - 120px);
  overflow-y: auto;
}

.el-aside {
  /*line-height: 100vh;*/
  overflow: hidden;
}

</style>
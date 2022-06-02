<template>


  <el-container>
    <NavAdminAside></NavAdminAside>
    <el-container direction="vertical">
      <NavAdminHeader></NavAdminHeader>
      <router-view></router-view>
      <NavAdminFooter></NavAdminFooter>
    </el-container>

  </el-container>


</template>

<script>

import NavAdminAside from "@/components/admin/NavAdminAside";
import NavAdminFooter from "@/components/admin/NavAdminFooter";
import NavAdminHeader from "@/components/admin/NavAdminHeader";


export default {
  name: "NavAdmin",
  components: {NavAdminFooter, NavAdminAside, NavAdminHeader}
}
</script>

<style scoped>

</style>
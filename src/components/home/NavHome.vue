<template>
  <el-container>
    <NavAside></NavAside>
    <el-container direction="vertical">
      <NavHeader></NavHeader>
      <NavMain></NavMain>
      <NavFooter></NavFooter>
    </el-container>
  </el-container>
</template>

<script>
import NavAside from "@/components/NavAside";
import NavHeader from "@/components/NavHeader";
import NavMain from "@/components/NavMain";
import NavFooter from "@/components/NavFooter";

export default {
  name: "NavHome",
  components: {NavFooter, NavHeader, NavAside, NavMain}
}
</script>

<style scoped>

</style>
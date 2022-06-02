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
import NavAside from "@/components/home/NavAside";
import NavHeader from "@/components/home/NavHeader";
import NavMain from "@/components/home/NavMain";
import NavFooter from "@/components/home/NavFooter";

export default {
  name: "NavHome",
  components: {NavFooter, NavHeader, NavAside, NavMain}
}
</script>

<style scoped>

</style>
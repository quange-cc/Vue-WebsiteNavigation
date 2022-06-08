<template>
  <el-footer>
    <p>© 2016-2022 &nbsp;
      <a href="https://www.quange.cc/">泉哥博客</a>
    </p>
  </el-footer>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "NavFooter",
  computed: {
    ...mapState('webSites', ['backStyle'])
  }
}
</script>

<style scoped>
.el-footer {
  /*background-color: #eaeff8;*/
  /*color: #333;*/
  text-align: center;
}
</style>
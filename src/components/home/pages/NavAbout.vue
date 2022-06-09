<template>

  <el-main :style="backStyle">
    <h2>关于</h2>
    <p>
      通过学习，一点点完善功能
    </p>
  </el-main>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "NavAbout",
  computed: {
    ...mapState('webSites', ['backStyle'])
  }
}
</script>

<style scoped>

</style>
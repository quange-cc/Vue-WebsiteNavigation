<template>
  <el-main>
    内容主体
  </el-main>
</template>

<script>
export default {
  name: "NavAdminMain",
  data() {
    return {
      activeIndex: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>

</style>
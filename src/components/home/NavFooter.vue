<template>
  <el-footer :style="style">
    <p>© 2016-2022 &nbsp;
      <a href="https://www.quange.cc/">泉哥博客</a>
    </p>
  </el-footer>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "NavFooter",
  data() {
    return {
      style: ''
    }
  },
  mounted() {
    this.changeStyle();
  },
  computed: {
    ...mapState('webSites', ['backStyle'])
  },
  methods: {
    // 取字符串样式中一个颜色
    changeStyle() {
      const index = this.backStyle.indexOf('#')
      const index1 = this.backStyle.indexOf('0%')
      this.style = 'background-color:' + this.backStyle.slice(index, index1);
    }
  },
  watch: {
    // 监视值
    backStyle() {
      this.changeStyle();
    }
  }
}
</script>

<style scoped>
.el-footer {
  text-align: center;
}
</style>
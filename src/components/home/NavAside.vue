<template>
  <el-aside :width="isCollapse ? '64px':'200px'">

    <el-menu
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        :collapse-transition="false"
        :collapse="isCollapse"
        :router="true"
    >
      <el-menu-item index="/">
        <h3>网址导航</h3>
      </el-menu-item>

      <template v-for="val in asideData">
        <el-submenu :index="`${val.id}`" :key="val.id">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{ val.parentName }}</span>
          </template>
          <el-menu-item-group>
            <template v-for="v in val.children">
              <el-menu-item :key="v.id" @click="getById(v.id)">{{ v.parentName }}</el-menu-item>
            </template>
          </el-menu-item-group>
        </el-submenu>
      </template>

      <el-menu-item index="/about">
        <i class="el-icon-setting"></i>
        <span slot="title">关于</span>
      </el-menu-item>

    </el-menu>

  </el-aside>
</template>

<script>
import {mapState, mapActions} from "vuex";

export default {
  name: "NavAside",
  computed: {
    ...mapState('webSites', ['isCollapse', 'asideData'])
  },
  mounted() {
    this.getAside()
  },
  methods: {
    ...mapActions('webSites', {
      getAside: 'GET-aside-Data',
      getData: 'GET-WEBSITE-DATA-BY-ID'
    }),

    // 传入子类id，获取数据
    getById(id) {
      // 判断当前路由
      if (this.$route.path !== '/') {
        this.$router.replace('/')
      }
      this.getData(id);
    }
  },
}
</script>

<style scoped>
.el-menu-vertical-demo {
  height: 100vh;
  border-right: hidden;
}
</style>
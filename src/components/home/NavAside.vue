<template>
  <el-aside :width="isCollapse ? '64px':'200px'" class="hidden-xs-only">

    <el-menu
        class="el-menu-vertical-demo"
        :collapse-transition="false"
        :collapse="isCollapse"
        :router="true">
      <el-menu-item index="/" v-show="isCollapse">
        <i class="el-icon-s-home"></i>
      </el-menu-item>

      <el-menu-item index="/" v-show="!isCollapse">
        <i>
          <img src="@/assets/logo.png" style="width: 150px;height: 50px" alt="logo">
        </i>
      </el-menu-item>

      <template v-for="val in asideData">
        <el-submenu :key="val.parentName" :index="val.parentName">
          <template slot="title">
            <i class="el-icon-price-tag"></i>
            <span>{{ val.parentName }}</span>
          </template>
          <el-menu-item-group>
            <template v-for="v in val.children">
              <el-menu-item :key="v.parentName" @click="getById(v.id)">{{ v.parentName }}</el-menu-item>
            </template>
          </el-menu-item-group>
        </el-submenu>
      </template>

      <el-menu-item index="/about">
        <i class="el-icon-info"></i>
        <span slot="title">关于</span>
      </el-menu-item>
    </el-menu>

  </el-aside>
</template>

<script>
import {mapState, mapActions} from "vuex";
import 'element-ui/lib/theme-chalk/display.css';

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
<template>
  <el-header>

    <el-menu
        class="el-menu-vertical-demo"
        mode="horizontal"
        :router="true"
    >


      <el-menu-item @click="openSidebar">
        <i class="el-icon-s-fold" v-show="!isCollapse"></i>
        <i class="el-icon-s-unfold" v-show="isCollapse"></i>
      </el-menu-item>

      <el-menu-item index="/" @click="getData">
        首页
      </el-menu-item>

      <el-menu-item @click="drawer = true">
        更换样式
      </el-menu-item>

      <el-menu-item style="float: right">
        <a href="https://github.com/quange-cc/Vue-WebsiteNavigation">
          <img src="@/assets/github.png" alt="github" style="width: 25px;height: 25px">
        </a>
      </el-menu-item>

      <el-menu-item index="login" style="float: right" v-show="!loginStatus">
        登录
      </el-menu-item>

      <el-menu-item index="/admin" style="float: right" v-show="loginStatus">
        后台管理
      </el-menu-item>

    </el-menu>


    <!--  样式修改抽屉 -->
    <el-drawer
        title="样式修改"
        :visible.sync="drawer"
        size='25%'
        :with-header="true">
      <el-row :gutter="10">
        <template v-for="val in backgroundStyle">
          <el-col
              :xs="24"
              :sm:="24"
              :md:="24"
              :lg="24"
              :xl="12"
              :key="val.name"
              style="padding: 10px">
            <el-card class="box-card" shadow="hover">
              <div slot="header" class="clearfix">
                <span>{{ val.name }}</span>
                <el-button style="float: right; padding: 3px 0" type="text"
                           @click="changeStyle(val.style)">
                  设置样式
                </el-button>
              </div>
              <div class="text item"
                   :style="`height: 100px; ${val.style}`">
              </div>
            </el-card>
          </el-col>
        </template>
      </el-row>
    </el-drawer>

  </el-header>

</template>

<script>
import {mapMutations, mapState, mapActions} from "vuex";

export default {
  name: "NavHeader",
  data() {
    return {
      drawer: false,
    }
  },
  mounted() {
    this.getStyleList();
  },
  computed: {
    ...mapState('webSites', ['isCollapse', 'backgroundStyle']),
    ...mapState('isToken', ['loginStatus'])
  },
  methods: {
    ...mapMutations('webSites', {
      openSidebar: 'switch-sidebar',
      changeStyle: 'CHANGE-STYLE'
    }),
    ...mapActions('webSites', {
      getStyleList: 'GET-STYLE-LIST',
      getData: 'GET-WEBSITE-DATA',
    }),
  }
};
</script>

<style scoped>

</style>
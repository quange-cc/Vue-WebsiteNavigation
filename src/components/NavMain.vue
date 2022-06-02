<template>
  <el-main>
    <el-row type="flex" justify="center">
      <el-col :span="10">
        <div style="margin-top: 15px;">
          <el-input
              placeholder="请输入搜索内容"
              v-model="searchInput"
              class="input-with-select"
              @keyup.enter.native="search(searchInput)">
            <el-button slot="append" icon="el-icon-search" @click="search(searchInput)"></el-button>
          </el-input>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="10">
        <el-radio-group v-model="searchId" size="small" style="margin-top: 2px;">
          <el-radio-button label='1'>谷歌</el-radio-button>
          <el-radio-button label='2'>百度</el-radio-button>
          <el-radio-button label='3'>必应</el-radio-button>
          <el-radio-button label='4'>Github</el-radio-button>
        </el-radio-group>
      </el-col>
    </el-row>


    <template v-for="v in webSiteData">
      <el-row :gutter="20" type="left" v-for="(val) in v" :key="val.name">
        <h3 style="margin-top: 10px;margin-left: 20px">{{ val.name }}</h3>
        <el-col :span="5" v-for="val1 in val.sites" :key="val1.title">
          <!--            <div class="grid-content bg-purple" @click="openUrl(val1.url)" slot="reference"></div>-->
          <el-tooltip
              class="item"
              effect="dark"
              :content="val1.description"
              placement="bottom">
            <el-card class="box-card" shadow="hover" @click.native="openUrl(val1.url)">
              <el-avatar
                  shape="circle"
                  :size="40"
                  fit="cover"
                  style="float: left"
                  :alt="val1.title"
                  :src="`http://127.0.0.1:8081/ico/${val1.icon}`">
              </el-avatar>
              <div class="comment">
                <b>{{ val1.title }}</b>
                <p>{{ val1.description }}</p>
              </div>
            </el-card>
          </el-tooltip>
        </el-col>
      </el-row>
    </template>

  </el-main>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
  name: "NavMain",
  data() {
    return {
      searchInput: '',
      searchId: '1',
    }
  },

  mounted() {
    this.getWebsites();
  },
  computed: {
    ...mapState('webSites', ['webSiteData'])

  },
  methods: {
    ...mapMutations('webSites', {getWebsites: 'GET-SITES'}),

    // 打开url
    openUrl(url) {
      window.open(url)
    },
    search(value) {

      switch (this.searchId) {
        case '1':
          window.open('https://www.google.com/search?q=' + value);
          break;
        case '2':
          window.open('https://www.baidu.com/s?wd=' + value);
          break;
        case '3':
          window.open('https://www.bing.com/search?q=' + value);
          break;
        case '4':
          window.open('https://github.com/search?q=' + value)
          break;
      }
    }

  }
}
</script>

<style scoped>


.comment {
  margin-left: 60px;
}

.comment p {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #979898;
}


/*深度作用选择器*/
.el-card /deep/ .el-card__body {
  padding: 10px;
}


</style>
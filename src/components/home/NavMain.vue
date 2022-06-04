<template>
  <el-main style="background-color: #979898">
    <el-row type="flex" justify="center">
      <el-col :span="6">
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
      <el-col :span="6">
        <el-radio-group v-model="searchId" size="small" style="margin-top: 2px;">
          <el-radio-button label='1'>谷歌</el-radio-button>
          <el-radio-button label='2'>百度</el-radio-button>
          <el-radio-button label='3'>必应</el-radio-button>
          <el-radio-button label='4'>Github</el-radio-button>
        </el-radio-group>
      </el-col>
    </el-row>

    <template v-for="v in webSiteData">
      <el-row
          :gutter="20"
          v-for="(val) in v"
          :key="val.name"
      >
        <h4>{{ val.name }}</h4>
        <el-col :span="4" v-for="val1 in val.sites" :key="val1.title" style="padding: 10px">

          <el-tooltip
              class="item"
              effect="dark">
            <div slot="content" class="tooltip">{{ val1.description }}</div>
            <el-card class="box-card" @click.native="openUrl(val1.url)">
              <div class="img-card">
                <el-avatar
                    shape="circle"
                    :size="40"
                    fit="fill"
                    :alt="val1.title"
                    :src="`data:image/png;base64,${val1.icon}`"
                >
                </el-avatar>
              </div>
              <div class="comment">
                <strong>{{ val1.title }}</strong>
                <p>{{ val1.description }}</p>
              </div>
            </el-card>
          </el-tooltip>
        </el-col>
      </el-row>
    </template>

    <el-backtop target=".el-main" :bottom="100"></el-backtop>
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

h4 {
  margin-top: 10px;
  margin-left: 20px
}

strong {
  font-size: 14px;
}

.img-card {
  float: left;
  padding: 10px 0
}

.comment {
  margin-left: 60px;
  margin-top: 6px;
}

.comment p {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #979898;
  font-size: 11px;
}


/*深度作用选择器*/
.el-card /deep/ .el-card__body {
  padding: 10px;
}

.box-card:hover {
  transform: translateY(-6px);
  -webkit-transform: translateY(-6px);
  -moz-transform: translateY(-6px);
  box-shadow: 0 26px 40px -24px rgba(0, 36, 100, 0.3);
  -webkit-box-shadow: 0 26px 40px -24px #abd0eb;
  -moz-box-shadow: 0 26px 40px -24px rgba(0, 36, 100, 0.3);
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.tooltip{
  width: 200px;
}

</style>
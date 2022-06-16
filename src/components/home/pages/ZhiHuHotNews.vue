<template>
  <el-main :style="backStyle">

    <el-row type="flex" justify="center">
      <el-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="20"
          :xl="15">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>知乎热榜内容</span>
          </div>
          <el-collapse>
            <template v-for="val in list">
              <el-collapse-item :name="val.id" :key="val.id">
                <template slot="title">
                  <h2 class="collapse_title">{{ val.title }}</h2>
                  <el-tag type="danger">{{ val.heat }}</el-tag>
                </template>
                <div class="collapse_excerpt"><p>{{ val.excerpt }}</p></div>
                <div>
                  <a :href="`https://www.zhihu.com/question/${val.articledId}`" target="_blank">
                    点击查看原文
                  </a>
                </div>
              </el-collapse-item>
            </template>
          </el-collapse>
        </el-card>
      </el-col>
    </el-row>

  </el-main>
</template>

<script>
import axios from "axios";
import {mapState} from "vuex";

export default {
  name: "HotNews",
  data() {
    return {
      list: [],
    }
  },
  computed: {
    ...mapState('webSites', ['backStyle'])
  },
  mounted() {
    axios.get('api/hotList/ZhiHuHotList').then(resp => {
      this.list = resp.data.data;
    });

  }
}
</script>

<style scoped>
.collapse_title {
  font-size: 15px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.collapse_excerpt {
  font-size: 20px;
}
</style>
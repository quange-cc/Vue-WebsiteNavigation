<template>
  <el-main>

    <el-row :gutter="20">

      <el-col :span="20">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>知乎热榜内容</span>
          </div>
          <el-collapse accordion>
            <template v-for="val in list">
              <el-collapse-item :name="val.id" :key="val.id">
                <template slot="title">
                  <h1 class="collapse_title">{{ val.title }}</h1>
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

export default {
  name: "HotNews",
  data() {
    return {
      list: [],
    }
  },
  mounted() {
    axios.get('api/getZhiHuHotList').then(resp => {
      this.list = resp.data.data;
    });

  }
}
</script>

<style scoped>
.collapse_title {
  font-size: 15px;
}

.collapse_excerpt {
  font-size: 20px;
}
</style>
<template>
  <el-main :style="backStyle">
    <el-row>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>吾爱破解热门</span>
          </div>
          <ul>
            <li :key="val.id" v-for="val in poJieHotList">
              <a :href="`https://www.52pojie.cn/ ${val.href}`">
                <p>{{ val.title }}</p>
              </a>
            </li>
          </ul>
        </el-card>
      </el-col>
    </el-row>

  </el-main>
</template>

<script>
import {mapState} from "vuex";
import axios from "axios";

export default {
  name: "HotNews",
  data() {
    return {
      poJieHotList: []
    }
  },
  mounted() {
    this.getPoJieHotList();
  },
  computed: {
    ...mapState('webSites', ['backStyle'])
  },
  methods: {
    // 获取吾爱破解数据
    getPoJieHotList() {
      axios.get('api/reception/PoJieHotList').then(resp => {
        if (resp.data.code === 2004) {
          this.poJieHotList = resp.data.data;
        }
      });
    },
  }
}
</script>

<style scoped>

</style>
<template>
  <el-main :style="backStyle">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>吾爱破解热门</span>
          </div>
          <div class="box-card-content">
            <ul class="card-ul">
              <li :key="val.id" v-for="val in poJieHotList">
                <a :href="`https://www.52pojie.cn/${val.href}`" target="_blank">
                  <p>{{ val.title }}</p>
                </a>
              </li>
            </ul>
          </div>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>掘金热门</span>
          </div>
          <div class="box-card-content">
            <ul class="card-ul">
              <li :key="val.id" v-for="val in jueJinHotList">
                <a :href="`https://juejin.cn/post/${val.article}`" target="_blank">
                  <p>{{ val.title }}</p>
                </a>
              </li>
            </ul>
          </div>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>CSDN</span>
          </div>
          <div class="box-card-content">
            <ul class="card-ul">
              <li :key="val.id" v-for="val in csdnHotList">
                <a :href="val.href" target="_blank">
                  <p>{{ val.title }}</p>
                </a>
              </li>
            </ul>
          </div>
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
      poJieHotList: [],
      jueJinHotList: [],
      csdnHotList: [],
    }
  },
  mounted() {
    this.getPoJieHotList();
    this.getJueJinHotList();
    this.getCsdnHotList();
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

    getJueJinHotList() {
      axios.get('api/reception/JueJinHotList').then(resp => {
        if (resp.data.code === 2004) {
          this.jueJinHotList = resp.data.data;
        }
      });
    },
    getCsdnHotList() {
      axios.get('api/reception/CsdnHotList').then(resp => {
        if (resp.data.code === 2004) {
          this.csdnHotList = resp.data.data;
        }
      });
    }
  }
}
</script>

<style scoped>

/* 定义滚动条宽度*/
.box-card-content::-webkit-scrollbar {
  width: 4px;
}

/* 定义滚动条轨道 */
.box-card-content::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color: #555;
}


.box-card-content {
  overflow-y: auto;
  height: 400px;
}

.card-ul li a {
  text-decoration: none;
  color: black;
}
</style>
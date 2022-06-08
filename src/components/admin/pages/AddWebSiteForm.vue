<template>
  <el-dialog
      title="添加网址数据"
      :visible.sync="addWebSiteFormVisible"
      width="30%"
      :before-close="closeForm"
      :close-on-click-modal="false"
  >

    <!--添加网站数据表单区域-->
    <el-form
        :model="addWebSiteForm"
        ref="addWebSiteForm"
        class="demo-ruleForm"
    >
      <el-row type="flex">
        <el-col :span="10">
          <el-form-item>
            <el-select v-model="addWebSiteForm.parent" placeholder="请选择主分类">
              <template v-for="val in parentData">
                <el-option :label="val.parentName" :value="val.id" :key="val.id"></el-option>
              </template>
            </el-select>
          </el-form-item>
        </el-col>
        <el-form-item>
          <el-select v-model="addWebSiteForm.sort" placeholder="请选择子分类">
            <template v-for="val in sortData">
              <el-option :label="val.name" :value="val.id" :key="val.id"></el-option>
            </template>
          </el-select>
        </el-form-item>
      </el-row>


      <el-form-item prop="title">
        <el-input v-model="addWebSiteForm.title" placeholder="网站名称"></el-input>
      </el-form-item>

      <el-form-item prop="url">
        <el-input v-model="addWebSiteForm.url" placeholder="网站url"></el-input>
      </el-form-item>

      <el-form-item prop="description">
        <el-input type="textarea" v-model="addWebSiteForm.description" placeholder="网站简介"></el-input>
      </el-form-item>

      <el-form-item style="display: flex;justify-content: center">
        <el-button type="primary" @click="addData({refs: $refs.addWebSiteForm, form: addWebSiteForm})">添加</el-button>
      </el-form-item>
    </el-form>

  </el-dialog>
</template>

<script>
import {mapState, mapMutations, mapActions} from "vuex";

export default {
  name: "addWebSiteData",
  data() {
    return {
      addWebSiteForm: {
        parent: null,
        sort: '',
        title: '',
        url: '',
        description: ''
      },
      sortData: []
    }
  },
  watch: {
    // 监视 parent 选择框的值
    'addWebSiteForm.parent': {
      deep: true,
      handler(id) {
        // 当值被改变时进行获取子分类的信息
        this.axios.get('api/getAllSub?id=' + id).then(resp => {
          if (resp.data.code === 2004) {
            this.sortData = resp.data.data;
          }
        });
      }
    }
  },
  mounted() {
    // 获取主分类信息
    this.getParentData()
  },
  computed: {
    ...mapState('adminWebSites', ['addWebSiteFormVisible', 'parentData']),
  },
  methods: {
    ...mapMutations('adminWebSites', {
      closeForm: 'CLOSE-ADD-FORM',
    }),
    ...mapActions('adminWebSites', {
      getParentData: 'GET-PARENT-DATA',
      addData: 'ADD-WEB-SITES-DATA',
    }),

  }
}
</script>

<style scoped>

</style>
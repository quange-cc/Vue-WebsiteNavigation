<template>
  <el-main>
    <el-button @click="openForm">添加数据</el-button>
    <el-table
        :data="webSitesData"
        stripe
        style="width: 100%"
        :row-key="row => {return row.id}"
    >
      <el-table-column
          prop="id"
          label="id"
          width="100">
      </el-table-column>

      <el-table-column
          prop="parent"
          label="主分类"
      >
      </el-table-column>

      <el-table-column
          prop="sort"
          label="子分类"
      >
      </el-table-column>

      <el-table-column
          prop="title"
          label="网站名称"
      >
      </el-table-column>


      <el-table-column
          prop="description"
          label="网站简介">
      </el-table-column>

      <el-table-column
          prop="url"
          label="网站地址">
      </el-table-column>


      <el-table-column
          fixed="right"
          label="操作"
          width="150">
        <template v-slot="scope">
          <el-button type="text" size="small" @click="editButton(scope)">编辑</el-button>
          <el-button type="text" size="small" @click="deleteData(scope)">删除</el-button>
        </template>
      </el-table-column>

    </el-table>
    <!-- 添加数据组件-->
    <AddWebSiteForm></AddWebSiteForm>
    <!-- 编辑数据组件-->
    <EditWebSiteForm></EditWebSiteForm>
  </el-main>
</template>

<script>
import {mapMutations, mapState, mapActions} from "vuex";
import AddWebSiteForm from "@/components/admin/pages/AddWebSiteForm";
import EditWebSiteForm from "@/components/admin/pages/EditWebSiteForm";

export default {
  name: "WebSiteManage",
  components: {AddWebSiteForm, EditWebSiteForm},
  data() {
    return {}
  },
  mounted() {
    this.getData();
  },
  methods: {
    ...mapMutations('adminWebSites', {
      openForm: 'OPEN-ADD-FORM',
    }),
    ...mapActions('adminWebSites', {
      getData: 'GET-WEB-SITES-DATA',
      deleteData: 'DEL-WEB-SITES-DATA',
      editButton: 'EDIT-BUTTON',
    })
  },
  computed: {
    ...mapState('adminWebSites', ['webSitesData']),
  }
}
</script>

<style scoped>

</style>
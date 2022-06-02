<template>
  <el-dialog
      title="编辑网址数据"
      :visible.sync="editWebSiteFormVisible"
      width="30%"
      :before-close="closeForm"
  >

    <!--添加网站数据表单区域-->
    <el-form
        :model="editFormData"
        class="demo-ruleForm"
    >
      <el-row type="flex">
        <el-col :span="10">
          <el-form-item>
            <el-select v-model="editFormData.parentId" placeholder="请选择主分类">
              <template v-for="val in parentData">
                <el-option :label="val.parentName" :value="val.id" :key="val.id"></el-option>
              </template>
            </el-select>
          </el-form-item>
        </el-col>

        <el-form-item>
          <el-select v-model="editFormData.subSort" placeholder="请选择子分类">
            <template v-for="val in sortData">
              <el-option :label="val.name" :value="val.id" :key="val.id"></el-option>
            </template>
          </el-select>
        </el-form-item>
      </el-row>


      <el-form-item>
        <el-input v-model="editFormData.title" placeholder="网站名称"></el-input>
      </el-form-item>

      <el-form-item>
        <el-input v-model="editFormData.url" placeholder="网站url"></el-input>
      </el-form-item>

      <el-form-item>
        <el-input type="textarea" v-model="editFormData.description" placeholder="网站简介"></el-input>
      </el-form-item>

      <el-form-item style="display: flex;justify-content: center">
        <el-button type="primary" @click="updateData(editFormData)">确定修改</el-button>
      </el-form-item>
    </el-form>

  </el-dialog>
</template>

<script>
import {mapState, mapMutations, mapActions} from "vuex";

export default {
  name: "EditWebSiteData",
  data() {
    return {}
  },
  computed: {
    ...mapState('adminWebSites', ['editWebSiteFormVisible', 'editFormData', 'sortData', 'parentData']),
  },
  methods: {
    ...mapMutations('adminWebSites', {
      closeForm: 'CLOSE-EDIT-FORM'
    }),
    ...mapActions('adminWebSites', {
      updateData: 'UPDATE-WEB-SITES-DATA'
    }),
  },
}
</script>

<style scoped>

</style>
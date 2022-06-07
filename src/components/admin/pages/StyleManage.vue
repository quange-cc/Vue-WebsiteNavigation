<template>
  <el-main>
    <el-button type="primary" round @click="addFormVisible = true">添加样式</el-button>
    <el-table
        :data="backgroundStyle"
        stripe
        style="width: 100%">
      <el-table-column
          prop="id"
          label="id"
          width="180">
      </el-table-column>
      <el-table-column
          prop="name"
          label="姓名"
          width="250">
      </el-table-column>
      <el-table-column
          width="150"
          label="样式">
        <template v-slot="scope">
          <div :style="`height: 50px;${scope.row.style}`"></div>
        </template>
      </el-table-column>

      <el-table-column
          fixed="right"
          label="操作">
        <template v-slot="scope">
          <el-button type="text" size="small" @click="delStyle(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>


    <!-- 添加样式对话框   -->
    <el-dialog
        title="添加样式"
        :visible.sync="addFormVisible"
        :close-on-click-modal="false"
        width="20%">
      <el-form :model="addForm" ref="addForm">

        <el-form-item
            label="样式名称"
            prop="name"
            :rules="{required: true, message: '样式名称不能为空', trigger: 'blur'}">
          <el-input v-model="addForm.name" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item
            label="css样式"
            prop="style"
            :rules="{required: true, message: 'css样式不能为空', trigger: 'blur'}">
          <el-input v-model="addForm.style" autocomplete="off"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addStyle(addForm)">添加</el-button>
      </div>
    </el-dialog>

  </el-main>
</template>

<script>
import {mapState, mapActions} from "vuex";

export default {
  name: "StyleManage",
  data() {
    return {
      addFormVisible: false,
      addForm: {
        name: '',
        style: ''
      }
    }
  },
  mounted() {
    this.getStyle();
  },
  computed: {
    ...mapState('webSites', ['backgroundStyle'])
  },
  methods: {
    ...mapActions('webSites', {
      getStyle: 'GET-STYLE-LIST'
    }),
    // 添加样式数据
    addStyle(addForm) {
      this.$refs.addForm.validate((valid) => {
        if (valid) {
          // 发送添加数据请求
          this.axios.post('api/addBackgroundStyle', addForm).then(resp => {
            if (resp.data.code === 2001) {
              // 弹窗
              this.$notify.success('添加成功')
              // 清空表单
              this.$refs.addForm.resetFields();
              // 重新获取数据
              this.getStyle();
            } else {
              this.$notify.error('添加出错')
            }
          })

        } else {
          this.$message.info('请输入内容')
        }
      });


    },
    // 删除样式
    delStyle(row) {
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 发送请求删除
        this.axios.get('api/delBackgroundStyle?id=' + row.id).then(resp => {
          if (resp.data.code === 2002) {
            this.getStyle();
            this.$notify.success('删除成功');
          }
        });
      });

    },
  }
}
</script>

<style scoped>

</style>
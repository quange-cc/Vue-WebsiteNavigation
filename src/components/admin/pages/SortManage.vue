<template>
  <el-main>
    <el-button @click="addParent">添加主分类</el-button>
    <el-button @click="openAddSubSortForm">添加子分类</el-button>
    <el-table
        :data="sortData"
        style="width: 100%;
        margin-bottom: 20px;"
        row-key="parentName"
        border
        default-expand-all
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}">

      <el-table-column
          prop="id"
          label="ID"
          sortable
          width="100">
      </el-table-column>


      <el-table-column
          prop="tag"
          label="标识"
          width="100">
        <template v-slot="scope">
          <el-tag :type="scope.row.tag === 1 ? 'danger' : 'success'" disable-transitions>
            {{ scope.row.tag === 1 ? '主分类' : '子分类' }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column
          prop="parentName"
          label="分类名称">
      </el-table-column>


      <el-table-column label="操作" width="200">
        <template v-slot="scope">
          <el-button
              size="mini"
              @click="sortEdit(scope.$index, scope.row)">编辑
          </el-button>
          <el-button
              size="mini"
              type="danger"
              @click="sortDelete(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="添加子分类" :visible.sync="addSubSortFormVisible" width="15%">
      <el-form :model="sortForm">

        <el-form-item>
          <el-select v-model="sortForm.parentSort" placeholder="请选择主分类">
            <template v-for="val in parentData">
              <el-option :label="val.parentName" :value="val.id" :key="val.id"></el-option>
            </template>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-input v-model="sortForm.name" autocomplete="off" placeholder="添加的子分类名称"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addSubSortFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addSubSort(sortForm)">确 定</el-button>
      </div>
    </el-dialog>

  </el-main>

</template>

<script>

export default {
  name: "SortManage",
  data() {
    return {
      sortData: [],
      sortForm: {
        parentSort: '',
        name: ''
      },
      parentData: {},
      addSubSortFormVisible: false
    }
  },
  mounted() {
    this.getSortData()
  },
  methods: {
    // 获取所有分类信息
    getSortData() {
      this.axios.get('http://127.0.0.1:8081/api/getCategoryAll').then(resp => {
        this.sortData = resp.data.data
      });
    },

    // 获取主分类信息
    getParentData() {
      this.axios.get('http://127.0.0.1:8081/api/getAllParent').then(resp => {
        if (resp.data.code === 2004) {
          this.parentData = resp.data.data;
        }
      });
    },

    // 添加主分类
    addParent() {
      this.$prompt('请输入分类名称', '添加主分类', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(({value}) => {
        // 发送添加请求
        this.axios.post('http://127.0.0.1:8081/api/addParentData', value).then(resp => {
          if (resp.data.code === 2001) {
            this.$message.success('添加成功')
            this.getSortData();
          } else {
            this.$message.error('添加失败')
          }
        }).catch((error) => {
          this.$message.error('添加错误' + error)
        })
      }).catch(() => {
        this.$message.info('取消添加')
      });
    },

    // 删除数据
    sortDelete(index, row) {
      this.$confirm('确认分类是否有下有绑定的信息,是否继续?', '删除提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        if (row.tag === 1) {
          // 发送请求删除主分类
          this.axios.get('http://127.0.0.1:8081/api/delParent?id=' + row.id).then(resp => {
            if (resp.data.code === 2002) {
              this.$message.success('删除成功')
              this.getSortData();
            } else {
              this.$message.error('删除失败')
            }
          }).catch((error) => {
            this.$message.error(error)
          })
        }
        // 删除子分类
        if (row.tag === 2) {
          this.axios.get('http://127.0.0.1:8081/api/delSubData?id=' + row.id).then(resp => {
            if (resp.data.code === 2002) {
              this.$message.success('删除成功')
              this.getSortData();
            } else {
              this.$message.error('删除失败')
            }
          }).catch((error) => {
            this.$message.error(error)
          })
        }

      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });

    },

    //编辑数据
    sortEdit(index, row) {

      if (row.tag === 1) {
        this.$prompt('请输入主分类', '修改', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputValue: row.parentName
        }).then(({value}) => {
          //发送修改数据请求
          const parentData = {id: row.id, name: value}
          this.axios.post('http://127.0.0.1:8081/api/updateParent', parentData).then(resp => {
            if (resp.data.code === 2003) {
              this.$message.success('修改成功')
              this.getSortData()
            } else {
              this.$message.error('修改失败')
            }
          });

        });
      }

      if (row.tag === 2) {
        this.$prompt('请输入子分类', '修改', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputValue: row.parentName
        }).then(({value}) => {
          const sortData = {id: row.id, name: value}
          this.axios.post('http://127.0.0.1:8081/api/updateSubSort', sortData).then(resp => {
            if (resp.data.code === 2003) {
              this.$message.success('修改成功')
              this.getSortData()
            } else {
              this.$message.error('修改失败')
            }
          });
        });
      }

    },


    // 打开添加子分类窗口
    openAddSubSortForm() {
      this.addSubSortFormVisible = true
      // 获取主分类信息
      this.getParentData()
    },

    // 添加子分类信息
    addSubSort(sortForm) {
      // 发送添加子分类请求
      this.axios.post('http://127.0.0.1:8081/api/addSubData', sortForm).then(resp => {
        if (resp.data.code === 2001) {
          this.$message.success('添加成功')
          // 重新获取所有分类信息
          this.getSortData()
          // 将输入框设置为空
          sortForm.name = ''
          // 关闭添加窗口
          this.addSubSortFormVisible = false;
        } else {
          this.$message.error('添加失败')
        }
      }).catch((error) => {
        this.$message.error('添加失败' + error)
      })

    },

  }


}
</script>

<style scoped>

</style>
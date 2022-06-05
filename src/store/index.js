import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 首页数据
const webSites = {
    // 开启命名空间
    namespaced: true,
    // 准备state对象-保存具体数据
    state: {
        webSiteData: [],
        asideData: [],
        isCollapse: false
    },

    // 修改state中的数据
    mutations: {
        // 边栏收起打开
        'switch-sidebar'(state) {
            state.isCollapse = !state.isCollapse;
        }
    },

    // 响应组件中用户的动作
    actions: {
        // 获取左侧导航栏 信息
        'GET-aside-Data'(context) {
            Vue.axios.get('/api/getAside').then(resp => {
                if (resp.data.code === 2004) {
                    context.state.asideData = resp.data.data;
                }
            });
        },
        // 获取首页数据
        'GET-WEBSITE-DATA-BY-ID'(context, id) {
            Vue.axios.get('/api/getWebSitesById?id=' + id).then(resp => {
                if (resp.data.code === 2004) {
                    context.state.webSiteData = resp.data.data;
                }
            });
        }
    },
}

// 网址信息管理
const adminWebSites = {
    // 开启命名空间
    namespaced: true,
    // 准备state对象-保存具体数据
    state: {
        addWebSiteFormVisible: false,
        editWebSiteFormVisible: false,
        webSitesData: [],
        count: 0,
        editFormData: {},
        sortData: {},
        parentData: {}
    },
    // 修改state中的数据
    mutations: {
        'OPEN-ADD-FORM'(state) {
            state.addWebSiteFormVisible = true;
        },
        'CLOSE-ADD-FORM'(state) {
            state.addWebSiteFormVisible = false;
        },
        'OPEN-EDIT-FORM'(state, row) {
            state.editWebSiteFormVisible = true;
            // 将选中行数据copy到editFormData
            state.editFormData = Object.assign({}, row)
        },
        'CLOSE-EDIT-FORM'(state) {
            state.editWebSiteFormVisible = false;
        },
        'Update-WebSitesData'(state, formData) {
            // 查找所修改行数据的id在数据中的索引
            const index = state.webSitesData.findIndex(v => v.id === formData.id);
            // 将所修改行的数据进行替换
            state.webSitesData.splice(index, 1, formData)
        }
    },

    actions: {
        // 获取网址信息
        'GET-WEB-SITES-DATA'(context, data) {
            Vue.axios.get(`api/getAllData?page=${data.page}&limit=${data.size}`).then(resp => {
                if (resp.data.code === 2004) {
                    context.state.webSitesData = resp.data.data;
                    context.state.count = resp.data.count;
                }
            });
        },
        // 删除数据
        'DEL-WEB-SITES-DATA'(context, scope) {
            // 删除当前行数据
            // 弹出确定取消弹框
            this._vm.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                //点击确定按钮，发送删除请求
                Vue.axios.get('api/delSitesData?id=' + scope.row.id).then(resp => {
                    // 判断返回的code码
                    if (resp.data.code === 2002) {
                        this._vm.$message.success('删除成功');
                        // 删除数组的中数据
                        context.state.webSitesData.splice(scope.$index, 1)
                    } else {
                        this._vm.$message.error('删除失败');
                    }
                });
            }).catch(() => {
                this._vm.$message.info('已取消删除');
            });
        },
        // 添加数据
        'ADD-WEB-SITES-DATA'(context, Data) {
            // 发送请求添加数据
            Vue.axios.post('api/addSitesData', Data.form).then(resp => {
                if (resp.data.code === 2001) {
                    this._vm.$message.success('添加成功')
                    // 清空表单
                    Data.refs.resetFields()
                    // 重新获取数据
                    context.dispatch('GET-WEB-SITES-DATA')
                } else {
                    this._vm.$message.error('添加失败')
                }
            });

        },
        // 获取主分类信息
        'GET-PARENT-DATA'(context) {
            Vue.axios.get('api/getAllParent').then(resp => {
                if (resp.data.code === 2004) {
                    context.state.parentData = resp.data.data;
                }
            });
        },
        // 点击编辑按钮，接收到选中行的数据，发送请求来
        'EDIT-BUTTON'(context, scope) {
            context.commit('OPEN-EDIT-FORM', scope.row)
            // 发送请求获取子分类信息
            Vue.axios.get('api/getAllSub?id=' + scope.row.parentId).then(resp => {
                if (resp.data.code === 2004) {
                    // 将获取到的数据放到sortData
                    context.state.sortData = resp.data.data;
                }
            });
        },
        //修改数据
        'UPDATE-WEB-SITES-DATA'(context, editFormData) {
            // 传入需要修改的数据,发送修改数据请求
            Vue.axios.post('api/updateSitesData', editFormData).then(resp => {
                if (resp.data.code === 2003) {
                    // 修改webSitesData的值
                    context.commit('Update-WebSitesData', editFormData)
                    // 关闭修改窗口
                    context.commit('CLOSE-EDIT-FORM')
                    this._vm.$message.success('修改成功')
                } else {
                    this._vm.$message.error('修改出错')
                }
            });
        }

    },
}

// 后台布局数据
const layoutData = {
    // 开启命名空间
    namespaced: true,

    state: {
        isCollapse: false
    },

    actions: {},

    mutations: {
        // 边栏收起打开
        'switch-sidebar'(state) {
            state.isCollapse = !state.isCollapse;
        }
    }
}

// 校验token
const isToken = {
    // 开启命名空间
    namespaced: true,

    state: {
        loginStatus: false,
    },
    mutations: {
        'CHANGE-LOGIN-STATUS'(state, status) {
            state.loginStatus = status;
        }
    },
    actions: {
        'VERIFY-LOGIN-STATUS'(context) {
            return new Promise((resolve) => {
                // 判断token是否存在,发送请求对token进行验证是否有效
                if (Vue.$cookies.isKey('token')) {
                    Vue.axios.get('/api/validateToken').then(resp => {
                        context.commit('CHANGE-LOGIN-STATUS', resp.data.code === 7000)
                        resolve(resp.data.code === 7000);
                    });
                } else {
                    context.commit('CHANGE-LOGIN-STATUS', false)
                    resolve(false);
                }
            });
        },
    },
}

export default new Vuex.Store({
    modules: {
        webSites,
        adminWebSites,
        layoutData,
        isToken,
    },

    state: {
        metaInfo: {}
    },
    mutations: {
        CHANGE_META_INFO(state, metaInfo) {
            state.metaInfo = metaInfo;
        },
    },

});

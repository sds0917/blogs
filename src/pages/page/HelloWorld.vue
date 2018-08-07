<template>
    <el-container>
        <td-location></td-location>
        <el-header class="p0" height="40px" v-if="quanxian.seauser || quanxian.adduser">
            <el-col :span="14" v-if="quanxian.seauser">
                <span class="dib">关键字：</span>
                <el-input v-model="keyWord" clearable placeholder="请输入内容" style="width: 180px;"></el-input>
                <el-button @click="getList" style="margin-left: 10px;">搜索</el-button>
            </el-col>
            <el-col :span="quanxian.seauser ? 10 : 24" class="tar">
                <el-button type="primary" @click="toSave" v-if="quanxian.adduser">新增</el-button>
            </el-col>
        </el-header>
        <el-main class="p0 pr">
            <el-table :data="table.list" border stripe height="100%" class="h-full" @selection-change="val => selects = val">
                <el-table-column type="selection" width="60" align="center"></el-table-column>
                <el-table-column fixed prop="number" label="编号" width="150" align="center"></el-table-column>
                <el-table-column prop="name" label="姓名" header-align="center"></el-table-column>
                <el-table-column prop="sex" label="性别" width="120" align="center">
                    <template slot-scope="scope">
                        {{scope.row.sex == 1 ? '男' : '女'}}
                    </template>
                </el-table-column>
                <el-table-column prop="birthday" label="生日" width="150" align="center">
                    <template slot-scope="scope">
                        {{scope.row.birthday ? scope.row.birthday.split(' ')[0] : ''}}
                    </template>
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="100" align="center" v-if="quanxian.upduser || quanxian.deluser">
                    <template slot-scope="scope">
                        <el-button @click="toUpdate(scope.row.id)" type="text" v-if="quanxian.upduser">修改</el-button>
                        <el-button @click="deleteUser([scope.row.id])" type="text" v-if="quanxian.deluser">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-main>
        <el-footer class="p0" height="40px">
            <el-col :span="8" v-if="quanxian.deluser">
                <el-button type="danger" :disabled="!selects || !selects.length" @click="deleteUser()">删除</el-button>
            </el-col>
            <el-col :span="quanxian.deluser ? 16 : 24" class="tar">
                <el-pagination :current-page.sync="table.pageNum" :page-size="table.pageSize" :total="table.total" @current-change="getList" layout="prev, pager, next, total"></el-pagination>
            </el-col>
        </el-footer>
        <el-dialog :title="user.id ? '修改用户' : '新增用户'" :visible.sync="user.visible" width="400px">
            <el-form ref="user" :rules="rules" :model="user" label-width="80px" style="padding-right: 20px">
                <el-form-item label="编号：" prop="number">
                    <el-input v-model="user.number"></el-input>
                </el-form-item>
                <el-form-item label="姓名：" prop="name">
                    <el-input v-model="user.name"></el-input>
                </el-form-item>
                <el-form-item label="性别：" prop="sex">
                    <el-radio-group v-model="user.sex">
                        <el-radio :label="1">男</el-radio>
                        <el-radio :label="2">女</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="生日：" prop="birthday">
                    <el-date-picker v-model="user.birthday" type="date" :clearable="false" :editable="false" size="small" placeholder="选择日期" style="width: 100%"></el-date-picker>
                </el-form-item>
            </el-form>
            <div slot="footer">
                <el-button @click="user.visible = false">取消</el-button>
                <el-button type="primary" @click="saveOrUpdate">确定</el-button>
            </div>
        </el-dialog>
    </el-container>
</template>
<script>
    import {getList, findById, updateUser, saveUser, deleteUser} from './request.js'
    import {mapGetters} from 'vuex'

    export default {
        name: 'HelloWorld',
        data() {
            return {
                keyWord: '',
                selects: [],
                tableData: [],
                table: {
                    list: [],
                    pageNum: 1,
                    pageSize: 10,
                    total: 0
                },
                rules: {
                    number: [
                        {required: true, message: '请输入编号', trigger: 'blur'}
                    ],
                    name: [
                        {required: true, message: '请输入姓名', trigger: 'blur'}
                    ],
                    sex: [
                        {required: true, message: '请输入性别', trigger: 'blur'}
                    ],
                    birthday: [
                        {required: true, message: '请输入生日', trigger: 'blur'}
                    ]
                },
                user: {
                    visible: false,
                    id: '',
                    name: '',
                    sex: '',
                    number: '',
                    birthday: ''
                }

            }
        },
        created() {
            this.getList()
        },
        methods: {
            getList() {
                getList({
                    keyWord: this.keyWord,
                    pageNum: this.table.pageNum,
                    pageSize: this.table.pageSize
                }).then(res => {
                    this.table = res
                })
            },
            deleteUser(ids) {
                if (!ids) {
                    ids = _.map(this.selects, 'id')
                }
                console.log(ids)
                this.$confirm('此操作将永久删除该数据, 是否继续？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    deleteUser(ids.join(',')).then(res => {
                        this.$message({
                            message: '操作成功！',
                            type: 'success'
                        })
                        this.getList()
                    })
                }).catch(() => {
                })
            },
            saveOrUpdate() {
                this.$refs.user.validate(valid => {
                    if (!valid) {
                        return valid
                    }
                    var _user = _.cloneDeep(this.user);
                    _user.birthday = dayjs(_user.birthday).format('YYYY-MM-DD HH:mm:ss');
                    (_user.id ? updateUser(_user) : saveUser(_user)).then(res => {
                        this.user.visible = false
                        this.$message({
                            message: '操作成功！',
                            type: 'success'
                        })
                        this.getList()
                    })
                })
            },
            toSave() {
                this.user = {
                    visible: true,
                    name: '',
                    sex: 1,
                    number: '',
                    birthday: new Date()
                }
                this.$nextTick(() => {
                    this.$refs.user.resetFields()
                })
            },
            toUpdate(id) {
                findById(id).then(res => {
                    this.user = {
                        visible: true,
                        ...res
                    }
                })
                this.$nextTick(() => {
                    this.$refs.user.resetFields()
                })
            }
        },
        computed: {
            ...mapGetters(['quanxian'])
        }
    }
</script>
<style scoped>
    .el-container {
        width: 100%;
        height: 100%;
        position: absolute;
    }
</style>

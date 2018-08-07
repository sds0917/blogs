<template>
    <el-row>
        <td-location></td-location>
        <el-col class="mb10">搜索：<el-switch v-model="quanxian.seauser"></el-switch></el-col>
        <el-col class="mb10">新增：<el-switch v-model="quanxian.adduser"></el-switch></el-col>
        <el-col class="mb10">修改：<el-switch v-model="quanxian.upduser"></el-switch></el-col>
        <el-col class="mb10">删除：<el-switch v-model="quanxian.deluser"></el-switch></el-col>
    </el-row>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "QuanXian",
        data() {
            return {}
        },
        computed: {
            ...mapGetters(['quanxian'])
        }
    }
</script>

<style scoped>

</style>

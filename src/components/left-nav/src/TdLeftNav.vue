<template>
    <el-menu default-active="hello" router class="za-aside-menu">
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
            </template>
            <el-menu-item index="hello" route="hello">用户管理</el-menu-item>
            <el-menu-item index="quanxian" route="quanxian">权限管理</el-menu-item>
            <el-menu-item index="test" route="test">测试</el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
    export default {
        name: "TdLeftNav"
    }
</script>

<style scoped>

</style>

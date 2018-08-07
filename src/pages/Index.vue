<template>
    <el-container class="za-container">
        <el-header class="za-header">Header</el-header>
        <el-container>
            <el-aside class="za-aside">
                <td-left-nav></td-left-nav>
            </el-aside>
            <el-container>
                <el-main class="za-main">
                    <router-view></router-view>
                </el-main>
                <el-footer style="padding: 0" height="30px">
                    <td-footer></td-footer>
                </el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
    import HelloWorld from './page/HelloWorld'

    export default {
        name: "Index",
        components: {
            HelloWorld
        }
    }
</script>

<style scoped>

</style>

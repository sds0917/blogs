<template>
    <div id="app">
        <transition name="el-fade-in-linear">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>

    export default {
        name: 'App',
        created() {
        }
    }
</script>

<style>
    @import "./styles/index.css";
</style>

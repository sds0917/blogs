<template>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="td-location">
        <span class="el-breadcrumb__item">位置：</span>
        <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="index" :to="item">{{ item.name }}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
    export default {
        name: "TdLocation",
        props: {
            data: {
                type: Array,
                default: function () {
                    return [];
                }
            }
        },
        data() {
            return {
                breadcrumbs: []
            };
        },
        mounted() {
            this.breadcrumbs = (this.data && this.data.length > 0) ? this.data : (this.$parent && this.$parent.$route && this.$parent.$route.matched) || [];
            console.log(this.breadcrumbs)
        }
    }
</script>

<style scoped>
    .td-location {
        height: 26px;
        line-height: 26px;
    }

    .td-location .td-location__text {
        display: inline-block;
    }
</style>

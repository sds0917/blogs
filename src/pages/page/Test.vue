<template>
    <div class="clock-box__wrapper">
        <div ref="clock" class="clock-box"></div>
    </div>
</template>

<script>
    export default {
        name: "Test",
        mounted() {
            this.$nextTick(() => {
                $(this.$refs.clock).clock();
            })
        }
    }
</script>

<style scoped>
    .clock-box__wrapper {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
    }

    .clock-box__wrapper:after {
        content: "";
        display: inline-block;
        height: 100%;
        width: 0;
        vertical-align: middle;
    }

    .clock-box__wrapper .clock-box {
        display: inline-block;
        vertical-align: middle;
        backface-visibility: hidden;
    }
</style>

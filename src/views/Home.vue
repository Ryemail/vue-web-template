<template>
    <section class="home">
        <van-button type="primary">主要按钮</van-button>
        <!-- <div class="container"></div> -->
        <div>
            {{ date }}
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { util } from '@/utils';

@Component
export default class Home extends Vue {
    date = '';
    created() {
        this.date = util.format('yyyy-MM-dd hh:mm:ss');
    }
}
</script>

<style lang="less" scoped>
.container {
    position: relative;
    width: 500px;
    height: 250px;
    background: #fff;
    border-radius: 100%;
    margin: 100px auto;
    border: 6px solid #000;
    border-bottom-width: 250px;
    animation: animat 0.3s linear infinite;
    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 70px;
        height: 70px;
        border-radius: 100%;
        top: 50%;
        border: 90px solid;
    }
    &::before {
        background: #fff;
        left: 0;
        border-color: #000;
    }
    &::after {
        background: #000;
        right: 0;
        border-color: #fff;
    }
}

@keyframes animat {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>

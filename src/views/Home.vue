<template>
    <section class="home">
        <van-button type="primary" @click.prevent.self="test">主要按钮</van-button>
        <!-- <div class="container"></div> -->
        <input v-model.lazy="msg" placeholder="请输入" /> value:{{ msg }}
        <div v-for="item in 10" :key="item">
            {{ date }}
        </div>
        <van-field v-model.lazy="user" label="文本" placeholder="请输入用户名" />
    </section>
</template>

<script lang="ts">
import { Component, Mixins, Watch } from 'vue-property-decorator';
import { util } from '@/utils';
import Keyboard from '@/mixins/keyboard';
import '@/utils/raf';

@Component
export default class Home extends Mixins(Keyboard) {
    date = util.format('yyyy-MM-dd hh:mm:ss');
    user = '';
    msg = '';

    @Watch('msg')
    watchMsg(value: string) {
        console.log(value, '你牛逼啊');
    }

    created() {
        const count = () => {
            this.date = util.format('yyyy/MM/dd hh:mm:ss');
        };

        const reId = () => {
            const raf: number = window.requestAnimationFrame(() => {
                count();

                if (raf >= 10000) return window.cancelAnimationFrame(raf);

                reId();
            });
        };
        reId();
    }

    countdown() {
        // const timer = setTimeout(() => {
        //     clearTimeout(timer);
        //     this.date = util.format('yyyy-MM-dd hh:mm:ss');
        //     this.countdown();
        // }, 1000);
    }

    test() {
        //
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

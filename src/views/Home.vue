<template>
    <section class="home">
        <img
            src="https://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1596789580&t=31a9dab7ed9f61461f3d0cae7e2b289c"
        />
        <van-button type="primary">主要按钮</van-button>
    </section>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>

<style lang="less" scoped>
img {
    width: 200px;
}
</style>

<template>
    <section class="home">
        <van-button type="primary">主要按钮</van-button>
        vue 移动端
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { util } from '@/utils';

@Component
export default class Home extends Vue {
    created() {
        console.log(util.format('yyyy-MM-dd'));
    }
}
</script>

<style lang="less" scoped>
img {
    width: 200px;
}
</style>

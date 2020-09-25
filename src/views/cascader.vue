<template>
    <div>
        <van-tabs v-model="tabsIndex" ref="tabs" :swipe-threshold="10">
            <van-tab v-for="(tab, key) in tabs" :key="key" :title="tab" animated :disabled="!tab">
                <ul>
                    <li
                        v-for="(item, index) in tabsData[key]"
                        :key="index"
                        :class="[index === itemActive[key] ? 'active-color' : '']"
                        @click="onTabClick(key, index)"
                    >
                        {{ item }}
                    </li>
                </ul>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Cascader extends Vue {
    tabs = ['请选择', '', '', '', ''];
    tabsIndex = 0;
    tabsData = [[0, 0, 0, 0, 0, 0]];
    itemActive = [-1];

    created() {
        this.$store.commit('changeFooter', false);
    }

    onTabClick(key: number, index: number) {
        const nextIndex = key + 1;

        console.log(this.itemActive);

        this.itemActive[key] = index;

        if (key >= 3) return false;

        this.tabs.splice(nextIndex, 1, '请选择');

        this.tabsData.splice(nextIndex, 0, [...Array(6).fill(nextIndex)]);

        if (this.tabsData[nextIndex + 1]) {
            this.tabsData.splice(nextIndex + 1, this.tabsData.length - nextIndex + 1);
        }

        this.$nextTick(() => {
            this.tabsIndex = nextIndex;
        });
    }
}
</script>

<style lang="less"></style>

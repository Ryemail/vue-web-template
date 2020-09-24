<template>
    <div>
        <van-tabs v-model="tabsIndex" :ellipsis="false" ref="tabs">
            <van-tab v-for="(tab, key) in tabs" :key="key" :title="tab" animated :disabled="!tab">
                <ul>
                    <li
                        v-for="(item, index) in tabsData[key]"
                        :key="index"
                        :class="[index === itemActive[index] ? 'active-color' : '']"
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
import { Tabs } from 'vant';
import { Component, Vue, Watch } from 'vue-property-decorator';

export default {
    name: 'Cascader',
    data() {
        return {
            tabs: ['请选择', '', '', '', ''],
            tabsIndex: 0,
            tabsData: [[0, 0, 0, 0, 0, 0]],
            itemActive: [-1],
        };
    },
    created() {
        this.$store.commit('changeFooter', false);
    },
    methods: {
        onTabClick(key: number, index: number) {
            const nextIndex = this.tabsIndex + 1;

            if (nextIndex >= 5) return false;

            this.tabs.splice(nextIndex, 1, '请选择');

            this.tabsData.splice(nextIndex, 0, [...Array(6).fill(nextIndex)]);

            this.itemActive[index] = index;

            // console.log(this);
            this.$nextTick(() => {
                this.tabsIndex = nextIndex;
            });
        },
    },
};
</script>

<style lang="less"></style>

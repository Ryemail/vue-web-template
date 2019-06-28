<template>
  <div class="Collapse">
    <van-collapse v-model="activeNames" @change="collapseChange">
      <van-collapse-item
        :title="`标题${key}`"
        :name="key"
        :value="item.state[item.index]"
        :is-link="false"
        v-for="(item,key) in list"
        :key="key"
      >内容</van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
import Vue from "vue";
import { Collapse, CollapseItem } from "vant";
Vue.use(Collapse).use(CollapseItem);
export default {
  data() {
    return {
      activeNames: ["1"],
      collapse: {
        index: 0
      },
      list: [
        { index: 0, state: ["展开", "收起"] },
        { index: 0, state: ["展开", "收起"] },
        { index: 0, state: ["展开", "收起"] },
        { index: 0, state: ["展开", "收起"] },
        { index: 0, state: ["展开", "收起"] },
        { index: 0, state: ["展开", "收起"] }
      ]
    };
  },
  methods: {
    collapseChange(activeNames,f) {
    //   let index = activeNames.length - 2;
      console.log(activeNames,f);
      this.list[index].index = this.list[index].index ? 0 : 1;
    }
  }
};
</script>

<style lang="less" scoped>
</style>
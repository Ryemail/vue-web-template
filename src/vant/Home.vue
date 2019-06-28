<style lang="less" scoped>
.home {

}
</style>

<template>
  <div class="home wrap padding-lr-0">
    <van-tabs v-model="active" class="flex flex-dir flex-just flex-1">
      <van-tab :title="`标签${item}`" v-for="item in 6" :key="item">
        <div class="padding-lr-30 height-100 flex flex-dir">
          <div>
            内容 {{ item }}
            <router-link to="/about">about</router-link>
            <p v-for="item in 56" :key="item">{{ item }}</p>
          </div>
          <footer class="footer">青橄榄 提供技术支持</footer>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";

Vue.use(Tab)
  .use(Tabs);

export default {
  name: "home",
  components: {

  },
  created() {
    this.$store.commit("name", "你是白痴吗?");
  },
  data() {
    return {
      value: "",
      show: false,
      active: 1
    };
  },
  methods: {
     
      confirm(value){
          console.log(value)
      }
  },
};
</script>

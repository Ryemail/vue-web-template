<template>
  <div class="datetimePicker">
    <van-popup v-model="dateShow" position="bottom">
      <van-datetime-picker v-model="currentDate" :type="type" @cancel="cancel" @confirm="confirm"/>
    </van-popup>
  </div>
</template>
<script>
import Vue from "vue";
import { DatetimePicker, Popup } from "vant";
import { dateFtt } from "../assets/public/";
Vue.use(DatetimePicker).use(Popup);
export default {
  props: {
    fmt: {
      type: String,
      default: "yyyy-MM-dd"
    },
    show:{
        type: Boolean,
        default: false
    },
    type: {
      type: String,
      default: "date"
    }
  },
  data() {
    return {
      dateShow: this.show,
      currentDate: new Date()
    };
  },
  created(){
      this.dateShow = this.show;
  },
  methods: {
    cancel() {
      this.dateShow = false;
    },
    confirm(value) {
      this.dateShow = false;
      this.$emit("confirm", dateFtt(this.fmt, new Date(value)));
    }
  }
};
</script>

<style lang="less" scoped>
</style>

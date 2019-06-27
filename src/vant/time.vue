<template>
  <div class="time">
    <!--  <van-datetime-picker
      v-model="currentDate"
      type="datetime"
      :min-date="minDate"
      :max-date="maxDate"
    />-->
    <!--  -->
    <van-field v-model="value" readonly @click="alertTime" placeholder="请输入用户名"/>
    <van-popup v-model="show" position="bottom">
      <van-datetime-picker v-model="currentDate" @cancel="cancel" @confirm="confirm" type="date" :min-date="minDate"/>
    </van-popup>
  </div>
</template>
<script>
import Vue from "vue";
import { DatetimePicker, Popup, Field } from "vant";
Vue.use(DatetimePicker)
  .use(Popup)
  .use(Field);
export default {
  data() {
    return {
      value: "",
      show: false,
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      maxDate: new Date(2019, 10, 1),
      currentDate: new Date()
    };
  },
  created() {
    console.log(this.$store.state);
  },
  methods: {
    alertTime() {
      this.show = true;
    },
    cancel(){
        this.show = false;
    },
    confirm(value){
        console.log(value);
        // this.cancel();
    }
  }
};
</script>

<style lang="less" scoped>
</style>

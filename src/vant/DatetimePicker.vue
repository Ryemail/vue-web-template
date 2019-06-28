<template>
  <div>
    <van-cell-group>
      <van-field v-model="form.value" readonly @click="show" placeholder="请选择时间"/>
    </van-cell-group>
    <van-popup v-model="date.value" :position="date.position">
      <van-datetime-picker
        v-model="date.currentDate"
        :type="date.type"
        @cancel="show"
        @confirm="confirm"
      />
    </van-popup>
  </div>
</template>
<script>
import Vue from "vue";
import { DatetimePicker, Popup, Field, CellGroup } from "vant";
import { dateFtt } from "@/assets/public/";
Vue.use(DatetimePicker)
  .use(Popup)
  .use(CellGroup)
  .use(Field);
export default {
  data() {
    return {
      date: {
        type: "date",
        value: false,
        position: "bottom",
        currentDate: new Date()
      },
      form: {
        value: ""
      }
    };
  },
  created() {},
  methods: {
    show() {
      this.date.value = !this.date.value;
    },

    confirm(value) {
      this.show();
      this.form.value = dateFtt("yyyy年MM月", new Date(value))
    }
  }
};
</script>

<style lang="less" scoped>
</style>

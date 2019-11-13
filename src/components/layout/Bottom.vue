<template>
  <van-tabbar route v-model="active">
    <van-tabbar-item icon="home-o" to="/list">优惠信息</van-tabbar-item>
    <van-tabbar-item icon="search" to="/">一键充电</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/my">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      active: 0
    };
  }
};
</script>
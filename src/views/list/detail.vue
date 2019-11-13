<template>
  <div>
    <van-nav-bar title="详情" left-arrow @click-left="onClickLeft" />
  </div>
</template>
<script>
import { NavBar } from "vant";
export default {
  components: {
    [NavBar.name]: NavBar
  },
  data() {
    return {};
  },
  method: {
    onClickLeft() {
      alert("返回");
    }
  }
};
</script>
<style lang="less" scoped>
.swiper-list {
  height: 300px;
  .item {
    width: 100%;
    height: 300px;
    background: #f1f1f1;
  }
}
</style>
<template>
  <div>
    <van-swipe :autoplay="3000" :loop="false" indicator-color="white" class="swiper-list">
      <van-swipe-item class="item" @click="clickSwiperItem">{{title}}</van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from "vant";
export default {
  //  props: ["title", "click-item"], // 子组件获取父组件的方法 2
  props: ["title"],
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  data() {
    return {};
  },
  beforeCreate: function() {
    this.$on("click-item", function(arg) {
      alert(arg);
    });
  },
  methods: {
    clickSwiperItem() {
      //  this.$parent.clickChildItem(); // 子组件获取父组件的方法 1
      // this.click-item(); //子组件获取父组件的方法 2
      this.$emit("click-item", "你好啊"); //子组件获取父组件的方法 3
    }
  }
};
</script>
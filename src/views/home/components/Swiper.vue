<style lang="less" scoped>

.swiper-list {
  background-color: #fff;
  height: 220px;
  .item {
    width: 100%;
    height: 220px;
    background: #fff;
  }
}
</style>
<template>
  <div>
    
    <van-swipe
      :autoplay="2000"
      :loop="true"
      indicator-color="white"
      class="swiper-list"
    >
      <van-swipe-item class="item">
        <van-image
          lazy-load
          fit="contain"
          width="320"
          height="220"
          src="https://img.yzcdn.cn/vant/apple-1.jpg"
        />
      </van-swipe-item>
      <van-swipe-item class="item"
        ><van-image
          lazy-load
          fit="contain"
          width="320"
          height="220"
          src="https://img.yzcdn.cn/vant/apple-2.jpg"
        />
      </van-swipe-item>
    </van-swipe>
   
  </div>
</template>
<script>
import {
  Swipe,
  SwipeItem,
  Image,
  Lazyload 
} from "vant";

export default {
  //  props: ["title", "click-item"], // 子组件获取父组件的方法 2
  props: ["title"],
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Image.name]: Image,
    [Lazyload.name]: Lazyload
  },
  data() {
    return {
     
    };
  },
  beforeCreate: function() {
    this.$on("click-item", function(arg) {
      alert(arg);
    });
  },
  mounted() {
   
  },
  methods: {
    clickSwiperItem() {
      //  this.$parent.clickChildItem(); // 子组件获取父组件的方法 1
      // this.click-item(); //子组件获取父组件的方法 2
      this.$emit("click-item", "你好啊"); //子组件获取父组件的方法 3
    },

    onSearch() {}
  }
};
</script>

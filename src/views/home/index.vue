
<style scoped>
.box {
  border: 1px solid #ddd;
  height: 100px;
  background: #f1f1f1;
}
</style><template>
  <div>
    首页
    {{$store}}
    <!-- <Swiper :title="title" :clickItem="clickChildItem" /> -->
    <!-- 子组件获取父组件的方法 2-->
    <!-- <Swiper :title="title" @clickItem="clickChildItem" /> -->
    <!-- 子组件获取父组件的方法 3-->
    <Swiper :title="title" @click-item="clickChildItem" />
    <div
      class="box"
      :style="{width:$store.getters.sildewidth+'px'}"
    >我是一个宽度为{{$store.getters.sildewidth}}的矩形</div>
    <button @click="changeBox">改变矩形宽度</button>
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/layout/Bottom.vue";
import Swiper from "./components/Swiper.vue";
export default {
  components: {
    Swiper,
    Footer
  },
  data() {
    return {
      title: "我是父组件的title属性"
    };
  },
  methods: {
    changeBox() {
      this.$store.commit("SET_SIDEWIDTH", "64px");
    },
    clickChildItem(sayhi) {
      alert("你点击了父组件的方法,并且子组件还向父组件说了：" + sayhi);
    }
  }
};
</script>
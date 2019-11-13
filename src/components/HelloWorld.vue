<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button>
  <van-button type="warning">警告按钮</van-button>
  <van-button type="danger">危险按钮</van-button>
  <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell
    v-for="item in list"
    :key="item"
    :title="item"
  />
</van-list>
  </div>
</template>
<style lang="less">
html{
  body{background:#f1f1f1;}
}
</style>
<script>
 import { Button,List,Cell  } from 'vant';
 
export default {
  name: 'HelloWorld',
  components: {
        [Button.name]: Button,
         [Cell.name]: Cell,
         [List.name]: List
    },
  props: {
    msg: String
  },
    data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },
    methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

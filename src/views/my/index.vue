<style scoped lang="less">
  .my-container{
    .main-header{
      display: flex;
      padding:20px 0;
      justify-content: center;
      align-items: center;
      background: #fff;
      height:200px;
    }
    .main-list{
      .item{padding:15px;display: flex;justify-content: space-between;align-items: center;background: #fff;border-bottom:1px solid #f1f1f1;
      .txt{font-size:14px;}.icon{font-size:14px;color:#999;}
        &:last-child{border-bottom:0;}
      } 
    }

  }
</style>
<template>
<div class="page my-container">
		<div class="main-header">
      <van-image width="100" height="100" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
    </div>  
    <div class="main-list mt15">
      <div class="item">
        <div class="txt">关于我们</div>
        <van-icon name="arrow" class="icon"/>
      </div>
      <div class="item">
        <div  class="txt">关于我们</div>
        <van-icon name="arrow" class="icon"/>
      </div>
    </div>
		<!-- 底部 -->
		<Footer />
	</div>

	
</template>
<script>
import { Image,Icon } from 'vant';
import Footer from "@/components/layout/Bottom.vue";
export default {
	components: {
		Footer,
		[Image.name]: Image,
		[Icon.name]: Icon
	},
	data() {
		return {};
	}
};
</script>
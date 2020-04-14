<style scoped lang="less">
.detail-container {
	.main-img{width:100%;}
	.img{width:80px;height:80px}
}
</style>
<template>
	<div class="page detail-container">
		<!-- 顶部 -->
		<div class="page-header">
			<van-nav-bar title="详情" left-arrow @click-left="onClickLeft" />
		</div>
		<!-- 主体内容 -->
		<div class="page-main">
			<van-image class="main-img"  src="https://img.yzcdn.cn/vant/cat.jpeg" />
			<img src="https://img.yzcdn.cn/vant/cat.jpeg" class="img"/>
		</div> 
	</div>
</template>
<script>
import { NavBar, Image } from "vant";
export default {
	components: {
		[NavBar.name]: NavBar,
		[Image.name]: Image,
	},
	data() {
		return {};
	},
	methods: {
		onClickLeft() {
			window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
		}
	}
};
</script>
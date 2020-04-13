<template>
	<div>
		<van-nav-bar title="详情" left-arrow @click-left="onClickLeft" />
    
		<van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
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
	method: {
		onClickLeft() {
			alert("返回");
		}
	}
};
</script>
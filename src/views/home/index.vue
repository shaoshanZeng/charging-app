
<style  lang="less">
.home-container{ 
   
}
</style>
<template>
	<div class="page home-container">
		<!-- 顶部 -->
		<div class="page-header">
			<van-search class="header-search" v-model="value" placeholder="请输入搜索关键词" show-action   background="#4fc08d" shape="round" @search="onSearch">
				<div slot="action" @click="onSearch" >搜索</div>
			</van-search>
		</div>
		<!-- 主体内容 -->
		<div class="page-main">
			<Swiper :title="title" @click-item="clickChildItem" />
			<van-grid class="mt15">
				<van-grid-item icon="photo-o" text="文字" />
				<van-grid-item icon="photo-o" text="文字" />
				<van-grid-item icon="photo-o" text="文字" />
				<van-grid-item icon="photo-o" text="文字" />
			</van-grid>
			<div class="mt15" style="height:500px;">
				<van-skeleton title avatar :row="3" :loading="loading">
					<div>{{ actItem }}</div>
				</van-skeleton>
			</div>
			<div>{{$store.getters.sildewidth}}</div>
		</div>
		<!-- 底部 -->
		<Footer />
	</div>
</template>
<script>
import Footer from "@/components/layout/Bottom.vue";
import Swiper from "./components/Swiper.vue";
import {
	Sticky,
	Search,
	Skeleton,
	Grid,
	GridItem,
	Row,
	Col
} from "vant";
export default {
	components: {
		Swiper,
		Footer,

		[Sticky.name]: Sticky,
		[Search.name]: Search,
		[Skeleton.name]: Skeleton,
		[Grid.name]: Grid,
		[GridItem.name]: GridItem,
		[Row.name]: Row,
		[Col.name]: Col
	},
	data() {
		return {
			value: "",
			loading: true,
			actItem: "",
			title: "我是父组件的title属性"
		};
	},
	mounted() {
		setTimeout(() => {
			this.actItem = "实际内容";
			this.loading = false;
		}, 200);
	},
	methods: {
		changeBox() {
			this.$store.commit("user/SET_SIDEWIDTH", "64px");
		},
		clickChildItem(sayhi) {
			alert("你点击了父组件的方法,并且子组件还向父组件说了：" + sayhi);
		},
		onSearch() {

		}
	}
};
</script>
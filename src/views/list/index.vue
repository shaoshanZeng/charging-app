<style lang="less" scoped>
.list-container {
	.van-card__content {
		text-align: left;
	}

	.add-btn {
		font-size: 40px;
		position: fixed;
		right: 10px;
		bottom: 60px;
		color: #8ec6ff;
	}
}
</style>
<template>
	<div class="page list-container">
		<!-- 顶部 -->
		<div class="page-header">
			<van-nav-bar title="列表" />
		</div>
		<!-- 主体内容 -->
		<div class="page-main"> 
			<van-list
				v-model="loading"
				:finished="finished"
				finished-text="没有更多了"
				:error.sync="error"
				error-text="请求失败，点击重新加载"
				@load="onLoad"
			>
				<van-card
					v-for="(item,index) in dataList"
					:key="index"
					@click="goToDetail(1)"
					desc="描述信息"
					title="商品标题商品标题商品标题"
					thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
				/>
			</van-list> 
			<router-link to="/add" class="add-btn">
				<van-icon name="add" />
			</router-link>
		</div>
		<!-- 底部 -->
		<Footer />
	</div>
</template>
<script>
import Footer from "@/components/layout/Bottom.vue";
import { List, Cell, Card, NavBar, Icon, PullRefresh } from "vant";

export default {
	components: {
		Footer,
		[Cell.name]: Cell,
		[List.name]: List,
		[Card.name]: Card,
		[NavBar.name]: NavBar,
		[Icon.name]: Icon,
		[PullRefresh.name]: PullRefresh
	},
	data() {
		return {
			dataList: [],
			error: false, 
			finished: false,
			loading:false,
			// 分页
			total: 0,
			pageNum: 0,
			pageSize: 10
		};
	},
	mounted() {

	},
	methods: {
		// 去详情页
		goToDetail(id) {
			console.log(id)
			this.$router.push({ path: '/list/detail', query: { id: id } })
		},




		async onLoad() {
			console.log("1")
			this.pageNum = this.pageNum + 1;
			let data = await this.http.post(`/work/queryWorkSheetList/${this.pageNum}/20`, { "status": "", "bxjg": "", "cStatus": 0, "fwt": "28383b0320ce43558a7912158229845a", "isweb": 1 });
			console.log(data); 
			this.loading = false;
			if (data) {
				if (data.list.length > 0) {

					if (this.pageNum > 1) {
						this.dataList = this.dataList.concat(data.list);
					} else {
						this.dataList = data.list;
					}
					this.total = data.total;
					// 是否加载完成
					if (this.dataList.length == data.total) {
						this.finished = true;
					} else {
						this.finished = false;
					}
				}
			}


		} 
	}
};
</script>

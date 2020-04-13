<style lang="less" scoped>
.list-container {
	.van-card__content {
		text-align: left;
		.van-card__title {
			font-size: 16px;
			line-height: 25px;
			margin-bottom: 20px;
			max-height: auto;
		}
	}

	.add-btn {
		font-size: 50px;
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
			<van-pull-refresh v-model="refreshing" @refresh="onRefresh">
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
			</van-pull-refresh>
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
			refreshing: false,
			loading: false,
			finished: false
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

		onLoad() {
			setTimeout(() => {
				if (this.refreshing) {
					this.dataList = [];
					this.refreshing = false;
				}

				for (let i = 0; i < 10; i++) {
					this.dataList.push(this.dataList.length + 1);
				}
				this.loading = false;

				if (this.dataList.length >= 20) {
					this.finished = true;
				}
			}, 1000);
		},
		onRefresh() {
			// 清空列表数据
			this.finished = false;

			// 重新加载数据
			// 将 loading 设置为 true，表示处于加载状态
			this.loading = true;
			this.onLoad();
		}
	}
};
</script>

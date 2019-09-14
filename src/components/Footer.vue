<template>
	<div class="tabbar" v-if='$route.meta.showtabbar'>
		<router-link :class="{on:'/home'===$route.path}" to="/"><i class="iconfont icon-home"></i><span>首页</span></router-link>
		<router-link :class="{on:'/shop'===$route.path}" to="/shop"><i class="iconfont icon-home"></i><span>商品</span></router-link>
		<router-link :class="{on:'/shopcart'===$route.path}" to="/shopcart"><i class="iconfont icon-home"></i><span>购物车</span></router-link>
		<router-link :class="{on:'/my'===$route.path}" to="/my"><i class="iconfont icon-home"></i><span>我的</span></router-link>
	</div>
</template>
<script>
	export default{
		name:'app-footer'

	}
</script>
<style scoped lang="stylus">
	.tabbar
		display flex
		padding 10px 0
		text-align center
		border-top 1px solid #ddd
		position fixed
		bottom 0
		left 0
		right 0
		.on
			color red
		>a
			flex 1
			i
				font-size 18px
				padding-bottom 5px
				span
					display block
					font-size 12px
					color gray
</style>
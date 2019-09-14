<template>
	<div class="header" v-on:click="changeTitle">
		{{title}}
	</div>
</template>
<script>
	export default{
		props:{
			title:{
				type:String
			}
		},

		methods:{
			changeTitle:function(){
				this.$emit("titleChange","子向父组件传值")
			}
		}
	}
</script>
<style scoped lang="stylus">

</style>
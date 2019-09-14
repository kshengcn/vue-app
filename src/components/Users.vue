<template>
	<div class="users">
		<h1>Hello Users</h1>
		<ul>
			<li v-for='(user,index) in userss' @click='user.show=!user.show'>
				<h3>{{index+1}}、{{user.name}}</h3>
				<p v-if='user.show'>{{user.position}}</p>
			</li>
		</ul>
		<button @click="deleteUsers">删除</button>

	</div>
</template>
<!-- 
     传值：string number boolean
	 引用：array object
	-->
	<script>
		export default{
			name:'users',
			props:{
				userss:{
					type:Array,
					required:true
				}
			},
			data(){
				return{}
			},
			methods:{
				deleteUsers:function(){
					this.userss.pop();
				}
			}
		}
	</script>
	<style scoped lang="stylus">
		.users
			margin 40px auto
			max-width 1200px
			padding 0 20px
			box-sizing border-box
			ul
				display flex
				list-style-type none
				flex-wrap wrap
				padding 0
				li
					border 1px solid #333
					flex-grow 1
					flex-basis 200px
					text-align center
					padding 30px
					margin 10px


	</style>
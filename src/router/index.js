// 路由器对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../pages/home'
import shop from '../pages/shop'
import shopcart from '../pages/shopcart'
import my from '../pages/my'
// 声明使用插件
Vue.use(VueRouter)
export default new VueRouter({
// 所有路由
routes:[
	{
		path:'/',
		redirect:'/home'
	},
	{
		path:'/home',
		component:home,
		meta:{
			showtabbar:true
		}
	},
	{
		path:'/shop',
		component:shop,
		meta:{
			showtabbar:true
		}
	},
	{
		path:'/shopcart',
		component:shopcart,
		meta:{
			showtabbar:true
		}
	},
	{
		path:'/my',
		component:my,
        meta:{
            showtabbar:true
        }
	}
]
})
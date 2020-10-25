import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [{
			path: "/",
			redirect: "/home"
		},
		{
			path: '/home',
			name: 'home',
			component: resolve => (require(["@/views/home"], resolve))
		},
		{
			path: '/contact',
			name: 'contact',
			component: resolve => (require(["@/views/contact/contact"], resolve))
		},
		{
			path: '/about',
			name: 'about',
			component: resolve => (require(["@/views/contact/about"], resolve))
		},
		{
			path: '/list',
			name: 'list',
			component: resolve => (require(["@/views/product/list"], resolve))
		},
		{
			path: '/listwei',
			name: 'listwei',
			component: resolve => (require(["@/views/product/listwei"], resolve))
		}
	]
})

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [{
			path: "/",
			redirect: "/index"
		},
		{
			path: '/home',
			name: 'home',
			component: resolve => (require(["@/views/home"], resolve))
		},
		{
			path: '/index',
			name: 'index',
			component: resolve => (require(["@/views/lu/index"], resolve))
		},
	]
})

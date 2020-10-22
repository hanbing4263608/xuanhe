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
    	path: '/news',
    	name: 'news',
    	component: resolve => (require(["@/views/news/news"], resolve))
    },
    {
      path: '/detail',
      name: 'detail',
      component: resolve => (require(["@/views/news/detail"], resolve))
    }
	]
})

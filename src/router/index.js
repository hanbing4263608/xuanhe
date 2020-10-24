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
    	path: '/news',
    	name: 'news',
    	component: resolve => (require(["@/views/news/news"], resolve)),
      children: [
        {
          path:'detail',
          name:'detail',
          component:detail => (require(["@/views/news/detail"],resolve))
        }
      ]
    },
    {
      path: '/detail',
      name: 'detail',
      component: resolve => (require(["@/views/news/detail"], resolve))
    }
	]
})

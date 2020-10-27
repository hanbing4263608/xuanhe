import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({

  routes: [{
      path: "/",
      redirect: "/index"
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => (require(["@/views/lu/index"], resolve))
    },
    {
      path: '/three',
      name: 'three',
      component: resolve => (require(["@/views/lu/three"], resolve))
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
      component: resolve => (require(["@/views/news/news"], resolve))
    },
    {
    	path: '/detail',
    	name: 'detail',
    	component: resolve => (require(["@/views/news/detail"], resolve))
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

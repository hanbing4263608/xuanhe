// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/style/common.css'
import '../static/style/rem.js'
import axios from 'axios'
import lazyload from 'vue-lazyload'
import store from './store/index.js'
import 'element-ui/lib/theme-chalk/index.css';
import {
	Button,
	Select
} from 'element-ui';
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style


Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
import 'swiper/swiper-bundle.css';
Vue.use(Button)
Vue.use(Select)


Vue.config.productionTip = false

Vue.prototype.$axios = axios
Vue.use(lazyload, {
	loading: '../static/style/loading.gif',
	error: '../static/style/erroe.jpg'
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>'
})

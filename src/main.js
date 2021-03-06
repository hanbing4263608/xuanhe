// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/style/common.css'
import '../static/style/rem.js'
import axios from 'axios'
Vue.prototype.$axios = axios;
import lazyload from 'vue-lazyload'
import store from './store/index.js'
import 'element-ui/lib/theme-chalk/index.css';
import 'swiper/swiper-bundle.css'
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper);
import animated from 'animate.css'
Vue.use(animated)
import i18n from './i18n/index.js'

import {
	Button,
	Select,
	Menu,
	Submenu,
	MenuItem,
	MenuItemGroup,
	Header,
	Row,
	Col,
	Pagination,
	TabPane,
	Tabs,
	Tag
} from 'element-ui';
Vue.use(Button)
Vue.use(Select)
Vue.use(Submenu)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Header)
Vue.use(Row)
Vue.use(Col)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Pagination)
Vue.use(Tag)
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
	ak: 'TsELfeQQhttXRCFpeA4bNzaqmz3ZXcCs'
});
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	i18n,
	components: {
		App
	},
	template: '<App/>'
})

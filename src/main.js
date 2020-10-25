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
import { Button, Select,Tabs,
  TabPane,
  Tag, Row,
  Col,Pagination, } from 'element-ui';
Vue.use(Button)
Vue.use(Select)
Vue.use(Tabs)
Vue.use(TabPane)
 Vue.use(Tag)
 Vue.use(Row)
 Vue.use(Col)
 Vue.use(Pagination);
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
    ak: 'TsELfeQQhttXRCFpeA4bNzaqmz3ZXcCs'
});


Vue.config.productionTip = false

Vue.prototype.$axios = axios
Vue.use(lazyload,{
	loading:'../static/style/loading.gif',
	error:'../static/style/erroe.jpg'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import store from './store/index'
import router from './router/index'
import './common/css/reset'
import './common/stylus/stylus'
import './common/style.css'
import './common/js/rem.js'
import './common/css/animate'
import './common/css/mint-style'

import $ from'jquery'
import app from './App'
import moment from 'moment'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Mint from 'mint-ui'
import VueVideoPlayer from 'vue-video-player'


Vue.use(VueVideoPlayer)


Vue.use(Mint)
Vue.use(ElementUI)
Vue.use(moment)

Vue.use(VueResource)


/* eslint-disable no-new */
var vm= new Vue({
  el: '#app',
  router,
  store,
  render: h => h(app)
})

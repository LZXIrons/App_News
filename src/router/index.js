import Vue from 'vue'
import Router from 'vue-router'

import App from '../App'
import home from '@/components/home/home'
import news from '@/components/news/news'
import video from '@/components/video/video'
import video_con from '@/components/video/video_con'
import article from '@/components/article/article'
import search from '@/components/search/search'
import form from '@/components/form/form'
import user from '@/components/user/user'
import zc from '@/components/user/zc'
import set from '@/components/user/set'

import login from '@/components/user/login'

Vue.use(Router)

const scrollBehavior = (to, from, savedPosition) => {
    if(savedPosition){
        return savedPosition
    }else{
        return { x: 0, y: 0 }
    }
}
export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  scrollBehavior ,
  routes: [
    {
      path: '/',
      name: 'App',
      redirect: "/home",
      component: App,
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },

    {
      path: '/news/:nav',
      name: 'news',
      component: news,

    },
    {
      path: '/video/:v_nav',
      name: 'video',
      component: video,

    },

    {
      path: '/new_list/search/__all__-app_news',
      name: 'search',
      component: search
    },

    {
      path: '/app/article/:id',
      name: 'article',
      component: article
    },
    {
      path: '/app/video/:id',
      name: 'video_con',
      component: video_con
    },
    {
      path: '/app/form/__user__-app_dz',
      name: 'form',
      component: form,

    },

    {
      path: '/app/user/__all__-_set_manage',
      name: 'user',
      component: user
    },
    {
      path: '/app/user/set',
      name: 'set',
      component: set
    },
    {
      path: '/app/user/login',
      name: 'login',
      component: login
    },
    {
      path: '/app/user/zc',
      name: 'zc',
      component: zc
    },

  ],
})
